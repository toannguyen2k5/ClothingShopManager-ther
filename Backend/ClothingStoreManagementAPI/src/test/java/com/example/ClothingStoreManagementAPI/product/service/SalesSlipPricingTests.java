package com.example.ClothingStoreManagementAPI.product.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import com.example.ClothingStoreManagementAPI.product.model.DataRequest.CartData;
import com.example.ClothingStoreManagementAPI.product.model.DataRequest.ShopDeliveryData;
import com.example.ClothingStoreManagementAPI.product.model.Entity.DiscountEvent;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Price;
import com.example.ClothingStoreManagementAPI.product.model.Entity.UserDiscountCode;
import com.example.ClothingStoreManagementAPI.product.repository.DetailProductRepository;
import com.example.ClothingStoreManagementAPI.product.repository.DiscountEventRepository;
import com.example.ClothingStoreManagementAPI.product.repository.PriceRepository;
import com.example.ClothingStoreManagementAPI.product.repository.SalesSlipRepository;
import com.example.ClothingStoreManagementAPI.product.repository.UserDiscountCodeRepository;
import com.example.ClothingStoreManagementAPI.product.service.SalesSlipService;

class SalesSlipPricingTests {
	private final DetailProductRepository detailProductRepository = mock(DetailProductRepository.class);
	private final PriceRepository priceRepository = mock(PriceRepository.class);
	private final DiscountEventRepository discountEventRepository = mock(DiscountEventRepository.class);
	private final SalesSlipRepository salesSlipRepository = mock(SalesSlipRepository.class);
	private final UserDiscountCodeRepository userDiscountCodeRepository = mock(UserDiscountCodeRepository.class);

	private SalesSlipService salesSlipService;

	@BeforeEach
	void setUp() {
		salesSlipService = new SalesSlipService();
		ReflectionTestUtils.setField(salesSlipService, "DetailProductRepository", detailProductRepository);
		ReflectionTestUtils.setField(salesSlipService, "PriceRepository", priceRepository);
		ReflectionTestUtils.setField(salesSlipService, "DiscountEventRepository", discountEventRepository);
		ReflectionTestUtils.setField(salesSlipService, "SalesSlipRepository", salesSlipRepository);
		ReflectionTestUtils.setField(salesSlipService, "UserDiscountCodeRepository", userDiscountCodeRepository);

		when(detailProductRepository.SelectIdDetailByIdPro("detail-1")).thenReturn("product-1");
		when(priceRepository.SelectCurrentPrices("product-1")).thenReturn(List.of(
				new Price("price-1", "product-1", LocalDate.now(), 1000, true)));
		when(discountEventRepository.SelectActiveDiscountEvents("product-1", LocalDate.now())).thenReturn(List.of(
				new DiscountEvent("event-1", "event-code", "product-1", 0.1f, 2,
						LocalDate.now().plusDays(1), "promotion")));
	}

	@Test
	void calculatesBillFromDatabasePriceAndAppliesProductAndVoucherDiscounts() {
		UserDiscountCode voucher = new UserDiscountCode();
		voucher.setDiscountCode("voucher-1");
		voucher.setIdUser("customer-1");
		voucher.setType("PERCENT");
		voucher.setDiscount(10);
		voucher.setMaxDiscountValue(200);
		voucher.setMinimumOrderValue(2000);
		voucher.setExpiry(LocalDate.now());
		when(userDiscountCodeRepository.FindByDiscountCodeAndIdUserForUpdate("voucher-1", "customer-1"))
				.thenReturn(Optional.of(voucher));
		when(salesSlipRepository.ExistsActiveOrderUsingDiscountCode("voucher-1"))
				.thenReturn(false);

		SalesSlipService.OrderPricing pricing = salesSlipService.calculateOrderPricing(
				"customer-1",
				"voucher-1",
				List.of(new ShopDeliveryData("shop-1", List.of(
						new CartData("detail-1", "product", 3, 1)))));

		assertEquals(2600, pricing.totalBill());
		assertEquals(1000, pricing.unitPrices().get("detail-1"));
	}

	@Test
	void rejectsVoucherThatDoesNotBelongToCustomer() {
		when(userDiscountCodeRepository.FindByDiscountCodeAndIdUserForUpdate("voucher-1", "customer-1"))
				.thenReturn(Optional.empty());

		assertThrows(IllegalArgumentException.class, () -> salesSlipService.calculateOrderPricing(
				"customer-1",
				"voucher-1",
				List.of(new ShopDeliveryData("shop-1", List.of(
						new CartData("detail-1", "product", 1, 100000))))));
	}

	@Test
	void rejectsVoucherAlreadyUsedOnAnActiveOrder() {
		UserDiscountCode voucher = new UserDiscountCode();
		voucher.setDiscountCode("voucher-1");
		voucher.setIdUser("customer-1");
		voucher.setType("VALUE");
		voucher.setDiscount(500);
		voucher.setMinimumOrderValue(0);
		voucher.setExpiry(LocalDate.now());
		when(userDiscountCodeRepository.FindByDiscountCodeAndIdUserForUpdate("voucher-1", "customer-1"))
				.thenReturn(Optional.of(voucher));
		when(salesSlipRepository.ExistsActiveOrderUsingDiscountCode("voucher-1"))
				.thenReturn(true);

		assertThrows(IllegalArgumentException.class, () -> salesSlipService.calculateOrderPricing(
				"customer-1",
				"voucher-1",
				List.of(new ShopDeliveryData("shop-1", List.of(
						new CartData("detail-1", "product", 1, 100000))))));
	}
}
