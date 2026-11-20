package com.example.ClothingStoreManagementAPI.product.service;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import com.example.ClothingStoreManagementAPI.product.model.Entity.DetailSalesSlip;
import com.example.ClothingStoreManagementAPI.product.model.Entity.InventoryShop;
import com.example.ClothingStoreManagementAPI.product.model.Entity.ListOfDeliveryStores;
import com.example.ClothingStoreManagementAPI.product.model.Entity.SalesSlip;
import com.example.ClothingStoreManagementAPI.product.repository.InventoryShopReponsitory;
import com.example.ClothingStoreManagementAPI.product.repository.SalesSlipRepository;
import com.example.ClothingStoreManagementAPI.product.service.SalesSlipService;

class SalesSlipCancellationTests {
	private final SalesSlipRepository salesSlipRepository = mock(SalesSlipRepository.class);
	private final InventoryShopReponsitory inventoryShopRepository = mock(InventoryShopReponsitory.class);
	private final ListOfDeliveryStoresService deliveryStoresService = mock(ListOfDeliveryStoresService.class);
	private final DetailSalesSlipService detailSalesSlipService = mock(DetailSalesSlipService.class);
	private SalesSlipService salesSlipService;
	private SalesSlip salesSlip;
	private InventoryShop inventoryRow;

	@BeforeEach
	void setUp() {
		salesSlipService = new SalesSlipService();
		ReflectionTestUtils.setField(salesSlipService, "SalesSlipRepository", salesSlipRepository);
		ReflectionTestUtils.setField(salesSlipService, "InventoryShopReponsitory", inventoryShopRepository);
		ReflectionTestUtils.setField(salesSlipService, "ListOfDeliveryStoresService", deliveryStoresService);
		ReflectionTestUtils.setField(salesSlipService, "DetailSalesSlipService", detailSalesSlipService);

		salesSlip = new SalesSlip();
		salesSlip.setIdSalesSlip("slip-1");
		salesSlip.setIdClient("customer-1");
		salesSlip.setDeliveryStatus("SCd001");
		when(salesSlipRepository.FindByIdForUpdate("slip-1")).thenReturn(Optional.of(salesSlip));

		when(deliveryStoresService.SellectListOfDeliveryStores("slip-1"))
				.thenReturn(List.of(new ListOfDeliveryStores("list-1", "slip-1", "shop-1", false)));
		when(detailSalesSlipService.SellectDetailSalesSlip("list-1"))
				.thenReturn(List.of(new DetailSalesSlip("line-1", "list-1", "detail-1", 3, 1000)));

		inventoryRow = new InventoryShop("inventory-1", "shop-1", "detail-1", 4);
		when(inventoryShopRepository.FindInventoryRowsForUpdate("shop-1", "detail-1"))
				.thenReturn(List.of(inventoryRow));
	}

	@Test
	void cancelsPendingOrderAndRestoresReservedStockOnce() {
		assertTrue(salesSlipService.CancelSalesSlip("slip-1", "customer-1"));

		assertTrue("SCd005".equals(salesSlip.getDeliveryStatus()));
		assertTrue(inventoryRow.getQuantity() == 7);
		verify(inventoryShopRepository).save(inventoryRow);
		verify(salesSlipRepository).save(salesSlip);

		assertFalse(salesSlipService.CancelSalesSlip("slip-1", "customer-1"));
		verify(inventoryShopRepository).save(inventoryRow);
	}

	@Test
	void rejectsCancellationByAnotherCustomerWithoutChangingInventory() {
		assertFalse(salesSlipService.CancelSalesSlip("slip-1", "customer-2"));

		assertTrue("SCd001".equals(salesSlip.getDeliveryStatus()));
		assertTrue(inventoryRow.getQuantity() == 4);
		verify(inventoryShopRepository, never()).save(inventoryRow);
		verify(salesSlipRepository, never()).save(salesSlip);
	}

	@Test
	void rejectsCancellationAfterOrderHasBeenApproved() {
		salesSlip.setDeliveryStatus("SCd002");

		assertFalse(salesSlipService.CancelSalesSlip("slip-1", "customer-1"));

		assertTrue(inventoryRow.getQuantity() == 4);
		verify(inventoryShopRepository, never()).save(inventoryRow);
	}
}
