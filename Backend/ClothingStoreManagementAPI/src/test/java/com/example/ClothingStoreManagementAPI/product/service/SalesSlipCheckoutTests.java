package com.example.ClothingStoreManagementAPI.product.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import com.example.ClothingStoreManagementAPI.product.model.ConstData.District;
import com.example.ClothingStoreManagementAPI.product.model.DTO.CheckoutShopResult;
import com.example.ClothingStoreManagementAPI.product.model.DataRequest.CartData;
import com.example.ClothingStoreManagementAPI.product.repository.DistrictRepository;
import com.example.ClothingStoreManagementAPI.product.repository.InventoryShopReponsitory;
import com.example.ClothingStoreManagementAPI.product.service.SalesSlipService;

class SalesSlipCheckoutTests {
	private final InventoryShopReponsitory inventoryShopRepository = mock(InventoryShopReponsitory.class);
	private final DistrictRepository districtRepository = mock(DistrictRepository.class);
	private SalesSlipService salesSlipService;

	@BeforeEach
	void setUp() {
		salesSlipService = new SalesSlipService();
		ReflectionTestUtils.setField(salesSlipService, "InventoryShopReponsitory", inventoryShopRepository);
		ReflectionTestUtils.setField(salesSlipService, "InventoryShopService", new InventoryShopService());
		ReflectionTestUtils.setField(salesSlipService, "DistrictRepository", districtRepository);

		when(districtRepository.findDistrictByNameAndProvince("Customer District", "Province"))
				.thenReturn(new District("district-customer", "province-1", "Customer District", 0.0, 0.0));
		when(districtRepository.findDistrictByNameAndProvince("Shop One District", "Province"))
				.thenReturn(new District("district-shop-1", "province-1", "Shop One District", 1.0, 1.0));
		when(districtRepository.findDistrictByNameAndProvince("Shop Two District", "Province"))
				.thenReturn(new District("district-shop-2", "province-1", "Shop Two District", 0.5, 0.5));
		when(districtRepository.findDistrictByNameAndProvince("Quận Shop Three District", "Thành phố Hà Nội"))
				.thenReturn(new District("district-shop-3", "province-1", "Shop Three District", 3.0, 3.0));
		when(districtRepository.findDistrictByNameAndProvince("Shop Four District", "Province"))
				.thenReturn(new District("district-shop-4", "province-1", "Shop Four District", 4.0, 4.0));
	}

	@Test
	void splitsRequestedQuantityAcrossShopsWhenNoSingleShopHasEnough() {
		when(inventoryShopRepository.SelectShopInventoryTotalsByIdDetail("detail-1")).thenReturn(List.of(
				new Object[] { "shop-1", "Shop One", 10L, "Shop One District, Province" },
				new Object[] { "shop-2", "Shop Two", 5L, "Shop Two District, Province" }));

		CheckoutShopResult result = salesSlipService.buildCheckoutResult(
				List.of(new CartData("detail-1", "Product", 15, 1000)),
				"Customer District, Province");

		assertTrue(result.isNeedSplit());
		assertEquals(2, result.getShopGroups().size());
		assertEquals(15, result.getShopGroups().stream()
				.flatMap(group -> group.getProducts().stream())
				.mapToInt(product -> product.getQuantity())
				.sum());
		assertEquals(List.of(5, 10), result.getShopGroups().stream()
				.map(group -> group.getProducts().get(0).getQuantity())
				.sorted()
				.toList());
		assertEquals(0, result.getUnfulfilledProducts().size());
		assertTrue(result.getTotalShipping() > 0);
		assertEquals(result.getShopGroups().stream().mapToDouble(group -> group.getShippingFee()).sum(),
				result.getTotalShipping(), 0.0001);
	}

	@Test
	void combinesInventoryRowsForTheSameShopBeforeCalculatingShipping() {
		when(inventoryShopRepository.SelectShopInventoryTotalsByIdDetail("detail-1")).thenReturn(List.<Object[]>of(
				new Object[] { "shop-1", "Shop One", 15L, "Shop One District, Province" }));

		CheckoutShopResult result = salesSlipService.buildCheckoutResult(
				List.of(new CartData("detail-1", "Product", 15, 1000)),
				"Customer District, Province");

		assertFalse(result.isNeedSplit());
		assertEquals(1, result.getShopGroups().size());
		assertEquals(15, result.getShopGroups().get(0).getProducts().get(0).getQuantity());
		assertTrue(result.getTotalShipping() > 0);
	}

	@Test
	void allocatesToNearestShopsWithoutReusingTheSameShop() {
		when(inventoryShopRepository.SelectShopInventoryTotalsByIdDetail("detail-1")).thenReturn(List.of(
				new Object[] { "shop-1", "Shop One", 10L, "Shop One District, Province" },
				new Object[] { "shop-2", "Shop Two", 3L, "Shop Two District, Province" },
				new Object[] { "shop-3", "Shop Three", 2L, "Street, Quận Shop Three District, Hà Nội, Country" },
				new Object[] { "shop-4", "Shop Four", 5L, "Shop Four District, Province" }));

		CheckoutShopResult result = salesSlipService.buildCheckoutResult(
				List.of(new CartData("detail-1", "Product", 15, 1000)),
				"Customer District, Province");

		assertTrue(result.isNeedSplit());
		assertEquals(List.of("shop-2", "shop-1", "shop-3"),
				result.getShopGroups().stream().map(group -> group.getIdShop()).toList());
		assertEquals(15, result.getShopGroups().stream()
				.flatMap(group -> group.getProducts().stream())
				.mapToInt(product -> product.getQuantity())
				.sum());
		assertEquals("Shop Two District, Province", result.getShopGroups().get(0).getAddress());
	}

	@Test
	void doesNotAllocateAnItemWhenTotalStockAcrossShopsIsInsufficient() {
		when(inventoryShopRepository.SelectShopInventoryTotalsByIdDetail("detail-1")).thenReturn(List.of(
				new Object[] { "shop-1", "Shop One", 10L, "Shop One District, Province" },
				new Object[] { "shop-2", "Shop Two", 4L, "Shop Two District, Province" }));

		CheckoutShopResult result = salesSlipService.buildCheckoutResult(
				List.of(new CartData("detail-1", "Product", 15, 1000)),
				"Customer District, Province");

		assertFalse(result.isNeedSplit());
		assertTrue(result.getShopGroups().isEmpty());
		assertEquals(List.of("detail-1"), result.getUnfulfilledProducts());
		assertEquals(0.0, result.getTotalShipping());
	}
}
