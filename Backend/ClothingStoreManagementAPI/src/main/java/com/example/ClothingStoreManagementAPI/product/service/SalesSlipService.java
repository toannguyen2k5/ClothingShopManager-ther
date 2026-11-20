package com.example.ClothingStoreManagementAPI.product.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.ClothingStoreManagementAPI.product.repository.*;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import com.example.ClothingStoreManagementAPI.product.model.ConstData.District;
import com.example.ClothingStoreManagementAPI.product.model.DTO.*;
import com.example.ClothingStoreManagementAPI.product.model.DataRequest.*;
import com.example.ClothingStoreManagementAPI.product.model.Entity.*;
import java.util.*;
import java.util.stream.Collectors;
import java.time.LocalDate;
import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class SalesSlipService {

	@Autowired
	private SalesSlipRepository SalesSlipRepository;
	@Autowired
	private ListOfDeliveryStoresService ListOfDeliveryStoresService;
	@Autowired
	private DetailSalesSlipService DetailSalesSlipService;
	@Autowired
	private Common common;
	@Autowired
	private ShopRepository ShopRepository;
	@Autowired
	private ShopService shopService;
	@Autowired
	private DistrictRepository DistrictRepository;
	@Autowired
	private ProvinceRepository ProvinceRepository;
	@Autowired
	private DetailedRefundSlipReponsitory DetailedRefundSlipReponsitory;
	@Autowired
	private InventoryShopReponsitory InventoryShopReponsitory;
	@Autowired
	private ShoppingCartRepository shoppingCartRepository;
	@Autowired
	private DetailProductService DetailProductService;
	@Autowired
	private UserRepository UserRepository;
	@Autowired
	private EntityManager entityManager;
	@Autowired
	private DetailProductRepository DetailProductRepository;
	@Autowired
	private InventoryShopService InventoryShopService;
	@Autowired
	private PriceRepository PriceRepository;
	@Autowired
	private DiscountEventRepository DiscountEventRepository;
	@Autowired
	private UserDiscountCodeRepository UserDiscountCodeRepository;
	@Transactional(readOnly = true)
	public List<SalesSlipDTO> SellectAll(String query_sql,int offset, int limit) {
		try {
			List<SalesSlipDTO> result = new ArrayList<>();
			Query query = entityManager.createQuery(query_sql, SalesSlip.class);
			if (offset > 0) {
				query.setFirstResult(offset); // OFFSET

			}
			if (limit > 0) {
				query.setMaxResults(limit); // LIMIT

			}
			List<SalesSlip> SalesSlips = query.getResultList();
			for (SalesSlip SalesSlip : SalesSlips) {
				result.add(new SalesSlipDTO(SalesSlip.getIdSalesSlip(),
						UserRepository.SellectFullName(SalesSlip.getIdCreater()),
						UserRepository.SellectFullName(SalesSlip.getIdClient()), SalesSlip.getCreateDate(),
						SalesSlip.getDeliveryAddress(), SalesSlip.getShippingFee(), SalesSlip.getTotalBill(),
						SalesSlip.getDeliveryStatus()));
			}
			return result;
		} catch (Exception e) {
			System.out.print("SelectPurchaseSlip all, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional(readOnly = true)
	public List<SalesSlipDTO> GetSalesSlipByIdCLient(String idClient) {
		try {
			List<SalesSlipDTO> result = new ArrayList<>();
			Query query = entityManager.createQuery("SELECT c FROM SalesSlip c", SalesSlip.class);
			List<SalesSlip> SalesSlips = query.getResultList();
			for (SalesSlip SalesSlip : SalesSlips) {
				if (SalesSlip.getIdClient().equals(idClient)) {
					result.add(new SalesSlipDTO(SalesSlip.getIdSalesSlip(),
							UserRepository.SellectFullName(SalesSlip.getIdCreater()),
							UserRepository.SellectFullName(SalesSlip.getIdClient()), SalesSlip.getCreateDate(),
							SalesSlip.getDeliveryAddress(), SalesSlip.getShippingFee(), SalesSlip.getTotalBill(),
							SalesSlip.getDeliveryStatus()));
				}
			}
			return result;
		} catch (Exception e) {
			System.out.print("SelectMaxId, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional(readOnly = true)
	public String SelectMaxId() {
		try {
			return SalesSlipRepository.SelectMaxId();
		} catch (Exception e) {
			System.out.print("SelectMaxId, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional(readOnly = true)
	public List<ShowAllRateDTO> ShowAllRate() {
		try {
			List<ShowAllRateDTO> result = new ArrayList<>();
			List<SalesSlip> SalesSlips = SalesSlipRepository.findAll();
			for (SalesSlip salesSlip : SalesSlips) {
				if (salesSlip.getDeliveryStatus().equals("SCd004")) {
					result.add(new ShowAllRateDTO(salesSlip.getIdSalesSlip(),
							UserRepository.SellectFullName(salesSlip.getIdClient()), salesSlip.getCreateDate(),
							salesSlip.getDeliveryAddress(), salesSlip.getEvaluate(), salesSlip.getComment()));
				}
			}
			return result;
		} catch (Exception e) {
			System.out.print("ShowAllRate, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional(readOnly = true)
	public List<DetailPurchaseSlipDTO> SellectDetailSalesSlip(String idSalesSlip) {
		try {
			List<DetailPurchaseSlipDTO> result = new ArrayList<>();
			List<ListOfDeliveryStores> ListOfReceivingStoress = ListOfDeliveryStoresService
					.SellectListOfDeliveryStores(idSalesSlip);
			for (ListOfDeliveryStores ListOfDeliveryStores : ListOfReceivingStoress) {
				List<DetailSalesSlip> DetailSalesSlips = DetailSalesSlipService
						.SellectDetailSalesSlip(ListOfDeliveryStores.getIdList());
				for (DetailSalesSlip DetailSalesSlip : DetailSalesSlips) {
					ReverseRetrievalDProductDTO ReverseRetrievalDProductDTO = DetailProductRepository
							.ReverseRetrievalDProduct(DetailSalesSlip.getIdDetailProduct());
					Optional<Shop> shop = shopService.getShop(ListOfDeliveryStores.getIdShop());

					result.add(new DetailPurchaseSlipDTO(ListOfDeliveryStores.getIdShop(), shop.get().getNameShop(),
							DetailProductRepository.SelectIdDetailByIdPro(DetailSalesSlip.getIdDetailProduct()),
							ReverseRetrievalDProductDTO.getNameProduct(), DetailSalesSlip.getPrice(),
							DetailSalesSlip.getQuantity(), ReverseRetrievalDProductDTO.getNameColor(),
							ReverseRetrievalDProductDTO.getNameSize()));
				}
			}
			return result;
		} catch (Exception e) {
			System.out.print("SellectDetailSalesSlip, Error : " + e.getMessage());
			return null;
		}
	}

	// check thông tin sản phẩm hợp lệ
	@Transactional(readOnly = true)
	public String checkinforvalid(CheckInforValidData CheckInforValidData) {
		try {
			String CheckIdDetail = DetailProductService.SelectIdDetailProduct(CheckInforValidData.getIdProduct(),
					CheckInforValidData.getIdColor(), CheckInforValidData.getIdSize());
			if (CheckIdDetail != "") {
				InventoryShop InventoryShop = InventoryShopReponsitory
						.SelectInventoryShop(CheckInforValidData.getIdShop(), CheckIdDetail);
				if (InventoryShop != null && InventoryShop.getQuantity() >= CheckInforValidData.getQuantity()) {
					return CheckIdDetail;
				} else {
					return "";
				}
			} else {
				return "";
			}
		} catch (Exception e) {
			return "";
		}
	}

	// tạo phiếu

@Transactional(rollbackFor = Exception.class)
public boolean InsertSalesSlip(SalesSlipData salesSlipData,List<ShopDeliveryData> shopDeliveryDatas) {
    try {
        OrderPricing orderPricing = calculateOrderPricing(
                salesSlipData.getIdClient(),
                salesSlipData.getDiscountcode(),
                shopDeliveryDatas
        );

        // 1. Tạo phiếu giao hàng
        String idcurrent = SalesSlipRepository.SelectMaxId();
        String newIdSalesSlip = idcurrent != null ? common.FindNextId(idcurrent) : common.GetFirstId(SalesSlip.class);
        SalesSlipRepository.save(
            new SalesSlip(
                newIdSalesSlip,
                salesSlipData.getIdCreater(),
                salesSlipData.getIdClient(),
                salesSlipData.getCreateDate(),
                salesSlipData.getDeliveryAddress(),
                orderPricing.totalBill(),
                salesSlipData.getShippingFee(),
                "SCd001",
                salesSlipData.getNote(),
                null, null, null,
                salesSlipData.getDiscountcode(),
                null, null
            )
        );

        // 2. Tạo danh sách giao hàng và chi tiết phiếu , đồng thời kiểm tra lượng tồn kho và trừ tồn kho nếu thỏa mãn
        for (ShopDeliveryData shopData : shopDeliveryDatas) {

            String newIdList =
                ListOfDeliveryStoresService.InsertListOfDeliveryStores(
                    new ListOfDeliveryStores(
                        null,
                        newIdSalesSlip,
                        shopData.getIdShop(),
                        false
                    )
                );

            if (newIdList == null || newIdList.isEmpty()) {
                throw new RuntimeException("Không thể tạo danh sách giao hàng");
            }

            for (CartData cartData : shopData.getShoppingCartData()) {
                List<InventoryShop> inventoryRows = InventoryShopReponsitory.FindInventoryRowsForUpdate(
                        shopData.getIdShop(), cartData.getIdDetail());
                long availableQuantity = inventoryRows.stream()
                        .mapToLong(row -> row.getQuantity() == null ? 0 : row.getQuantity())
                        .sum();
                if (availableQuantity < cartData.getQuantity()) {
                    throw new RuntimeException("Số lượng sản phẩm tại cửa hàng không đủ");
                }

                long quantityToDeduct = cartData.getQuantity();
                for (InventoryShop inventoryRow : inventoryRows) {
                    if (quantityToDeduct == 0) {
                        break;
                    }
                    int rowQuantity = inventoryRow.getQuantity() == null ? 0 : inventoryRow.getQuantity();
                    int deductedQuantity = (int) Math.min(rowQuantity, quantityToDeduct);
                    if (deductedQuantity > 0) {
                        inventoryRow.setQuantity(rowQuantity - deductedQuantity);
                        InventoryShopReponsitory.save(inventoryRow);
                        quantityToDeduct -= deductedQuantity;
                    }
                }
                if (quantityToDeduct > 0) {
                    throw new RuntimeException("Không thể cập nhật lại số lượng tồn kho");
                }

                boolean inserted =
                    DetailSalesSlipService.InsertDetailSalesSlip(
                        new DetailSalesSlip(
                            null,
                            newIdList,
                            cartData.getIdDetail(),
                            cartData.getQuantity(),
                            orderPricing.unitPrices().get(cartData.getIdDetail())
                        )
                    );

                if (!inserted) {
                    throw new RuntimeException("Không thể tạo chi tiết phiếu giao hàng");
                }
            }
        }

        // 3. Xóa sản phẩm khỏi giỏ hàng
        for (ShopDeliveryData shopData : shopDeliveryDatas) {

            for (CartData cartData : shopData.getShoppingCartData()) {

                ShoppingCart shoppingCart =
                    shoppingCartRepository.SelectShoppingCart(
                        salesSlipData.getIdClient(),
                        cartData.getIdDetail()
                    );

                if (shoppingCart != null) {
                    shoppingCartRepository.deleteById(
                        shoppingCart.getIdShoppingCart()
                    );
                }
            }
        }

        return true;

    } catch (Exception e) {
        System.err.println("InsertSalesSlip Error: " + e.getMessage());

        // Đánh dấu transaction cần rollback
        TransactionAspectSupport.currentTransactionStatus()
                .setRollbackOnly();
		return false;
    }
}

OrderPricing calculateOrderPricing(String idClient, String discountCode, List<ShopDeliveryData> shopDeliveryDatas) {
    if (shopDeliveryDatas == null || shopDeliveryDatas.isEmpty()) {
        throw new IllegalArgumentException("Đơn hàng không có sản phẩm");
    }

    BigDecimal subTotal = BigDecimal.ZERO;
    Map<String, Integer> unitPrices = new HashMap<>();
    LocalDate today = LocalDate.now();

    for (ShopDeliveryData shopData : shopDeliveryDatas) {
        if (shopData.getShoppingCartData() == null || shopData.getShoppingCartData().isEmpty()) {
            throw new IllegalArgumentException("Danh sách sản phẩm của cửa hàng không được để trống");
        }

        for (CartData cartData : shopData.getShoppingCartData()) {
            if (cartData.getQuantity() <= 0) {
                throw new IllegalArgumentException("Số lượng sản phẩm phải lớn hơn 0");
            }

            String idProduct = DetailProductRepository.SelectIdDetailByIdPro(cartData.getIdDetail());
            if (idProduct == null || idProduct.isBlank()) {
                throw new IllegalArgumentException("Không tìm thấy sản phẩm trong đơn hàng");
            }

            List<Price> currentPrices = PriceRepository.SelectCurrentPrices(idProduct);
            if (currentPrices.size() != 1 || currentPrices.get(0).getPrice() == null) {
                throw new IllegalArgumentException("Không xác định được giá hiện tại của sản phẩm");
            }
            int unitPrice = currentPrices.get(0).getPrice();
            if (unitPrice < 0) {
                throw new IllegalArgumentException("Giá sản phẩm không hợp lệ");
            }
            unitPrices.put(cartData.getIdDetail(), unitPrice);

            BigDecimal lineTotal = calculateProductLineTotal(
                    unitPrice,
                    cartData.getQuantity(),
                    DiscountEventRepository.SelectActiveDiscountEvents(idProduct, today)
            );
            subTotal = subTotal.add(lineTotal);
        }
    }

    BigDecimal discount = BigDecimal.ZERO;
    if (discountCode != null && !discountCode.isBlank()) {
        UserDiscountCode voucher = UserDiscountCodeRepository
                .FindByDiscountCodeAndIdUserForUpdate(discountCode, idClient)
                .orElseThrow(() -> new IllegalArgumentException("Mã giảm giá không thuộc tài khoản này"));

        if (SalesSlipRepository.ExistsActiveOrderUsingDiscountCode(discountCode)) {
            throw new IllegalArgumentException("Mã giảm giá đã được sử dụng");
        }
        if (voucher.getExpiry() == null || voucher.getExpiry().isBefore(today)) {
            throw new IllegalArgumentException("Mã giảm giá đã hết hạn");
        }
        if (subTotal.compareTo(BigDecimal.valueOf(voucher.getMinimumOrderValue())) < 0) {
            throw new IllegalArgumentException("Đơn hàng chưa đạt giá trị tối thiểu của mã giảm giá");
        }

        BigDecimal voucherValue = BigDecimal.valueOf(voucher.getDiscount());
        if ("PERCENT".equalsIgnoreCase(voucher.getType())) {
            discount = subTotal.multiply(voucherValue)
                    .divide(BigDecimal.valueOf(100));
            if (voucher.getMaxDiscountValue() > 0) {
                discount = discount.min(BigDecimal.valueOf(voucher.getMaxDiscountValue()));
            }
        } else {
            discount = voucherValue;
        }
        discount = discount.max(BigDecimal.ZERO).min(subTotal);
    }

    int totalBill = subTotal.subtract(discount)
            .setScale(0, RoundingMode.HALF_UP)
            .intValueExact();
    return new OrderPricing(totalBill, Map.copyOf(unitPrices));
}

private BigDecimal calculateProductLineTotal(int unitPrice, int quantity, List<DiscountEvent> activeEvents) {
    BigDecimal regularPrice = BigDecimal.valueOf(unitPrice);
    if (activeEvents == null || activeEvents.isEmpty()) {
        return regularPrice.multiply(BigDecimal.valueOf(quantity));
    }

    DiscountEvent event = activeEvents.get(0);
    Float decrease = event.getDecrease();
    Integer quantityLimit = event.getQuantityLimit();
    if (decrease == null || decrease <= 0 || decrease > 1 || quantityLimit == null || quantityLimit <= 0) {
        return regularPrice.multiply(BigDecimal.valueOf(quantity));
    }

    int discountedQuantity = Math.min(quantity, quantityLimit);
    int regularQuantity = quantity - discountedQuantity;
    BigDecimal discountedPrice = regularPrice.multiply(
            BigDecimal.ONE.subtract(new BigDecimal(decrease.toString()))
    );
    return regularPrice.multiply(BigDecimal.valueOf(regularQuantity))
            .add(discountedPrice.multiply(BigDecimal.valueOf(discountedQuantity)));
}

record OrderPricing(int totalBill, Map<String, Integer> unitPrices) {}


	// chỉ cập nhật thông tin đơn hàng
	@Transactional
	public boolean UpdateSalesSlip(SalesSlip SalesSlip) {
		try {
			if (!SalesSlip.getDeliveryStatus().equals("SCd004")) {
				return SalesSlipRepository.UpdateSalesSlip(SalesSlip.getIdSalesSlip(), SalesSlip.getIdCreater(),
						SalesSlip.getIdClient(), SalesSlip.getCreateDate(), SalesSlip.getDeliveryAddress(),
						SalesSlip.getTotalBill(), SalesSlip.getShippingFee(), SalesSlip.getDeliveryStatus(),
						SalesSlip.getNote(), SalesSlip.getEvaluate(), SalesSlip.getRefundStatus(), SalesSlip.getProof(),
						SalesSlip.getDiscountCode(), SalesSlip.getDeliveryDate(), SalesSlip.getComment()) > 0;
			} else {
				return false;
			}
		} catch (Exception e) {
			System.out.print("UpdateSalesSlip, Error : " + e.getMessage());
			return false;
		}
	}

	// cập nhật thông tin danh sách shop của đơn hàng
	@Transactional
	public boolean UpdateSalesSlip(SalesSlip SalesSlip, List<ShopDeliveryData> ShopDeliveryDatas) {
		try {
			if (!SalesSlip.getDeliveryStatus().equals("SCd004")) {
				// xóa danh sách kho các kiểu
				List<ListOfDeliveryStores> ListOfDeliveryStores = ListOfDeliveryStoresService
						.SellectListOfDeliveryStores(SalesSlip.getIdSalesSlip());
				for (ListOfDeliveryStores ListOfDeliveryStore : ListOfDeliveryStores) {
					DetailSalesSlipService.DeleteDetailSalesSlipByIdList(ListOfDeliveryStore.getIdList());
				}
				ListOfDeliveryStoresService.DeleteListOfDeliveryStoresByidSalesSlip(SalesSlip.getIdSalesSlip());

				// thêm danh sách phiếu lại khi thay đổi
				Set<Boolean> statusCreate = new HashSet<>();
				Stack<String> idListShops = new Stack<String>();
				if (!statusCreate.contains(false)) {
					// tạo phiếu thành công
					for (ShopDeliveryData ShopDeliveryData : ShopDeliveryDatas) {
						String newidList = ListOfDeliveryStoresService
								.InsertListOfDeliveryStores(new ListOfDeliveryStores(null, SalesSlip.getIdSalesSlip(),
										ShopDeliveryData.getIdShop(), false));
						statusCreate.add(!newidList.equals(""));
						if (!statusCreate.contains(false)) {
							idListShops.push(newidList);
							for (CartData ShoppingCartData : ShopDeliveryData.getShoppingCartData()) {
								statusCreate.add(DetailSalesSlipService.InsertDetailSalesSlip(
										new DetailSalesSlip(null, idListShops.peek(), ShoppingCartData.getIdDetail(),
												ShoppingCartData.getQuantity(), ShoppingCartData.getPrice())));
								if (statusCreate.contains(false)) {
									break;
								}
							}
							if (statusCreate.contains(false)) {
								break;
							}
						} else {
							break;
						}
					}
				}
				if (statusCreate.contains(false)) {
					if (!idListShops.empty()) {
						SalesSlipRepository.deleteById(SalesSlip.getIdSalesSlip()); // xóa phiếu nếu có lỗi
						for (String idListShop : idListShops) {
							ListOfDeliveryStoresService.DeleteListOfDeliveryStores(idListShop); // xóa list
							DetailSalesSlipService.DeleteDetailSalesSlipByIdList(idListShop);
						}
					}
					return false;
				} else {
					return UpdateSalesSlip(SalesSlip) && true;
				}
			} else {
				return false;
			}
		} catch (Exception e) {
			System.out.print("UpdateSalesSlip, Error : " + e.getMessage());
			return false;
		}
	}

	@Transactional
	public boolean UpdateStatusSalesSlip(SalesSlip SalesSlip) {
		try {
			if ("SCd005".equals(SalesSlip.getDeliveryStatus())) {
				Optional<SalesSlip> currentSlip = SalesSlipRepository.findById(SalesSlip.getIdSalesSlip());
				return currentSlip.isPresent()
						&& cancelSalesSlip(SalesSlip.getIdSalesSlip(), currentSlip.get().getIdClient());
			}
			Optional<SalesSlip> currentSlip =
					SalesSlipRepository.FindByIdForUpdate(SalesSlip.getIdSalesSlip());
			if (currentSlip.isEmpty() || "SCd005".equals(currentSlip.get().getDeliveryStatus())) {
				return false;
			}
			return SalesSlipRepository.updateStatusSalesSlip(SalesSlip.getIdSalesSlip(),
					SalesSlip.getDeliveryStatus()) > 0;
		} catch (Exception e) {
			System.out.print("UpdateSalesSlip, Error : " + e.getMessage());
			return false;
		}
	}

	@Transactional
	public boolean CancelSalesSlip(String idSalesSlip, String idClient) {
		return cancelSalesSlip(idSalesSlip, idClient);
	}

	private boolean cancelSalesSlip(String idSalesSlip, String expectedClientId) {
		try {
			Optional<SalesSlip> slipOptional = SalesSlipRepository.FindByIdForUpdate(idSalesSlip);
			if (slipOptional.isEmpty()) {
				return false;
			}

			SalesSlip slip = slipOptional.get();
			if (!"SCd001".equals(slip.getDeliveryStatus())
					|| (expectedClientId != null && !expectedClientId.equals(slip.getIdClient()))) {
				return false;
			}

			List<ListOfDeliveryStores> deliveryStores =
					ListOfDeliveryStoresService.SellectListOfDeliveryStores(idSalesSlip);
			if (deliveryStores == null) {
				throw new IllegalStateException("Không thể tải danh sách cửa hàng của đơn hàng");
			}

			Map<String, Map<String, Long>> quantitiesByShopAndDetail = new TreeMap<>();
			for (ListOfDeliveryStores deliveryStore : deliveryStores) {
				List<DetailSalesSlip> details =
						DetailSalesSlipService.SellectDetailSalesSlip(deliveryStore.getIdList());
				if (details == null) {
					throw new IllegalStateException("Không thể tải chi tiết sản phẩm của đơn hàng");
				}
				for (DetailSalesSlip detail : details) {
					quantitiesByShopAndDetail
							.computeIfAbsent(deliveryStore.getIdShop(), key -> new TreeMap<>())
							.merge(detail.getIdDetailProduct(), (long) detail.getQuantity(), Long::sum);
				}
			}

			for (Map.Entry<String, Map<String, Long>> shopEntry : quantitiesByShopAndDetail.entrySet()) {
				for (Map.Entry<String, Long> detailEntry : shopEntry.getValue().entrySet()) {
					List<InventoryShop> inventoryRows = InventoryShopReponsitory.FindInventoryRowsForUpdate(
							shopEntry.getKey(), detailEntry.getKey());
					if (inventoryRows == null || inventoryRows.isEmpty()) {
						throw new IllegalStateException("Không tìm thấy tồn kho để hoàn lại sản phẩm "
								+ detailEntry.getKey() + " tại cửa hàng " + shopEntry.getKey());
					}

					InventoryShop inventoryRow = inventoryRows.get(0);
					long currentQuantity = inventoryRow.getQuantity() == null ? 0 : inventoryRow.getQuantity();
					long restoredQuantity = Math.addExact(currentQuantity, detailEntry.getValue());
					if (restoredQuantity > Integer.MAX_VALUE) {
						throw new IllegalStateException("Số lượng tồn kho vượt giới hạn lưu trữ");
					}
					inventoryRow.setQuantity((int) restoredQuantity);
					InventoryShopReponsitory.save(inventoryRow);
				}
			}

			slip.setDeliveryStatus("SCd005");
			SalesSlipRepository.save(slip);
			return true;
		} catch (Exception e) {
			System.err.println("CancelSalesSlip Error: " + e.getMessage());
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
			return false;
		}
	}

	// xóa phiếu
	@Transactional
	public boolean DeleteSalesSlip(String idSalesSlip) {
		try {
			// tìm kiếm thông tin phiếu
			Optional<SalesSlip> salesSlip = SalesSlipRepository.findById(idSalesSlip);
			if (!salesSlip.isPresent()) {
				throw new RuntimeException("Không tìm thấy hóa đơn với ID: " + idSalesSlip);
			} else {
				if (!salesSlip.get().getDeliveryStatus().equals("SCd004")) {
					List<ListOfDeliveryStores> ListOfDeliveryStores = ListOfDeliveryStoresService
							.SellectListOfDeliveryStores(idSalesSlip);
					for (ListOfDeliveryStores ListOfDeliveryStore : ListOfDeliveryStores) {
						DetailSalesSlipService.DeleteDetailSalesSlipByIdList(ListOfDeliveryStore.getIdList());
					}
					ListOfDeliveryStoresService.DeleteListOfDeliveryStoresByidSalesSlip(idSalesSlip);
					SalesSlipRepository.deleteById(idSalesSlip);
					return !SalesSlipRepository.existsById(idSalesSlip);
				} else {
					return false;
				}
			}
		} catch (Exception e) {
			System.out.print("DeleteSalesSlip, Error : " + e.getMessage());
			return false;
		}
	}

	private double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
		System.out.println(Math.abs(lat2 - lat1));
		if (Math.abs(lat2 - lat1) < 1) {
			double deltaLat = Math.abs(lon2 - lon1);
			double northSouthDistance = deltaLat * 111.32; // km
			return northSouthDistance;
		} else {
			double lat1Rad = Math.toRadians(lat1);
			double lon1Rad = Math.toRadians(lon1);
			double lat2Rad = Math.toRadians(lat2);
			double lon2Rad = Math.toRadians(lon2);

			double dLat = lat2Rad - lat1Rad;
			double dLon = lon2Rad - lon1Rad;
			double a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
					+ Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

			double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
			return 6371 * c;
		}
	}

	public Long calculateShippingFee(double Distance) {
		if (Distance >= 0 && Distance <= 100) {
			return Math.round(Distance * 150 + 10000);
		} else if (Distance > 100 && Distance <= 500) {
			return Math.round(Distance * 120 + 10000);
		} else {
			return Math.round(Distance * 90 + 10000);
		}

	}

	// xem tất cả chi tiết phiếu hoàn trả
	@Transactional(readOnly = true)
	public List<DetailedRefundSlip> ShowDetailedRefundSlips(String idSalesSlip) {
		try {
			return DetailedRefundSlipReponsitory.ShowDetailedRefundSlips(idSalesSlip);
		} catch (Exception e) {
			System.out.print("ShowDetailedRefundSlips, Error : " + e.getMessage());
			return null;
		}
	}

	// thêm chi tiết phiếu hoàn
	@Transactional
	public boolean AddDetailedRefundSlips(List<DetailedRefundSlip> DetailedRefundSlips) {
		try {
			Set<Boolean> statusCreate = new HashSet<>();
			for (DetailedRefundSlip DetailedRefundSlip : DetailedRefundSlips) {
				String idcurrent = DetailedRefundSlipReponsitory.SelectMaxId();
				String newId = idcurrent != null ? common.FindNextId(idcurrent)
						: common.GetFirstId(DetailedRefundSlip.class);
				DetailedRefundSlip.setIdDetailedRefundSlip(newId);
				DetailedRefundSlipReponsitory.save(DetailedRefundSlip); // thêm brand vào csdl
				DetailedRefundSlipReponsitory.flush();
				statusCreate.add(DetailedRefundSlipReponsitory.existsById(newId)); // trạng thái tồn tại của object mới
			}
			if (statusCreate.contains(false)) {
				DeleteDetailedRefundSlips(DetailedRefundSlips.get(0).getIdSalesSlip());
			}
			return !statusCreate.contains(false);
		} catch (Exception e) {
			System.out.print("AddDetailedRefundSlips, Error : " + e.getMessage());
			DeleteDetailedRefundSlips(DetailedRefundSlips.get(0).getIdSalesSlip());
			return false;
		}
	}

	// xóa hết chi tiết phiếu
	@Transactional
	public boolean DeleteDetailedRefundSlips(String idSalesSlip) {
		try {
			return DetailedRefundSlipReponsitory.DeleteDetailedRefundSlips(idSalesSlip) > 0;
		} catch (Exception e) {
			System.out.print("DeleteDetailedRefundSlips, Error : " + e.getMessage());
			return false;
		}
	}

	@Transactional
	public boolean DeleteDetailedRefundSlip(String idDetailedRefundSlip) {
		try {
			DetailedRefundSlipReponsitory.deleteById(idDetailedRefundSlip);
			return !DetailedRefundSlipReponsitory.existsById(idDetailedRefundSlip);
		} catch (Exception e) {
			System.out.print("DeleteDetailedRefundSlip, Error : " + e.getMessage());
			return false;
		}
	}

	// cập nhật phiếu
	@Transactional
	public boolean UpdateDetailedRefundSlip(DetailedRefundSlip DetailedRefundSlip) {
		try {
			return DetailedRefundSlipReponsitory.UpdateDetailedRefundSlip(DetailedRefundSlip.getIdDetailedRefundSlip(),
					DetailedRefundSlip.getIdDetail(), DetailedRefundSlip.getCreateTime(),
					DetailedRefundSlip.getUpdateTime(), DetailedRefundSlip.getQuantity()) > 0;
		} catch (Exception e) {
			System.out.print("UpdateDetailedRefundSlip, Error : " + e.getMessage());
			return false;
		}
	}

	// cập nhật số lượng hàng tồn phiếu bán
//	@Transactional
//	public boolean UpdateInventorySalesSlip (SalesSlip SalesSlip, Map<String,List<CartData>> ShoppingCartDatas) {
//		Stack<InventoryShop> InventoryShops = new Stack<>();
//		try {
//			if(!SalesSlip.isDeliveryStatus()) {
//				Set<Boolean> statusCreate = new HashSet<>();
//				for(Map.Entry<String,List<CartData>> entry : ShoppingCartDatas.entrySet()) {
//					for(CartData ShoppingCartData : entry.getValue()) {
//						InventoryShops.push(InventoryShopReponsitory.SelectInventoryShop(entry.getKey(),ShoppingCartData.getIdDetail()));
//						statusCreate.add(InventoryShopReponsitory.UpdateInventoryShop(InventoryShops.peek().getQuantity() - ShoppingCartData.getQuantity(),entry.getKey(),ShoppingCartData.getIdDetail()) > 0);
//						if(statusCreate.contains(false)) break;
//					}
//					if(statusCreate.contains(false)) break;
//				}
//				if(statusCreate.contains(false)) {
//					for(InventoryShop InventoryShop : InventoryShops) {
//						InventoryShopReponsitory.save(InventoryShop);
//					}
//					return false;
//				}
//				else {
//					SalesSlip.setDeliveryStatus(true);
//					return UpdateSalesSlip(SalesSlip);
//				}
//			}
//			else return false;
//		}
//		catch(Exception e) {
//			System.out.print("UpdateInventorySalesSlip, Error : " + e.getMessage());
//			for(InventoryShop InventoryShop : InventoryShops) {
//				InventoryShopReponsitory.save(InventoryShop);
//			}
//			return false;
//		}
//	}
	// cập nhật số lượng hàng tồn phiếu hoàn trả
	@Transactional
	public boolean UpdateInventoryRefundSlip(SalesSlip SalesSlip, List<DetailedRefundSlip> DetailedRefundSlips) {
		Stack<InventoryShop> InventoryShops = new Stack<>();
		try {
			Set<Boolean> statusCreate = new HashSet<>();
			if (!SalesSlip.getRefundStatus()) {
				for (DetailedRefundSlip DetailedRefundSlip : DetailedRefundSlips) {
					String idShop = DetailedRefundSlipReponsitory
							.FindShopDeliverys(DetailedRefundSlip.getIdSalesSlip(), DetailedRefundSlip.getIdDetail())
							.get(0);
					InventoryShops.push(
							InventoryShopReponsitory.SelectInventoryShop(idShop, DetailedRefundSlip.getIdDetail()));
					statusCreate.add(InventoryShopReponsitory.UpdateInventoryShop(
							InventoryShops.peek().getQuantity() + DetailedRefundSlip.getQuantity(), idShop,
							DetailedRefundSlip.getIdDetail()) > 0);
					if (statusCreate.contains(false)) {
						break;
					}
				}
				if (statusCreate.contains(false)) {
					for (InventoryShop InventoryShop : InventoryShops) {
						InventoryShopReponsitory.save(InventoryShop);
					}
					return false;
				} else {
					SalesSlip.setRefundStatus(true);
					return UpdateSalesSlip(SalesSlip);
				}
			} else {
				return false;
			}
		} catch (Exception e) {
			System.out.print("UpdateInventoryRefundSlip, Error : " + e.getMessage());
			for (InventoryShop InventoryShop : InventoryShops) {
				InventoryShopReponsitory.save(InventoryShop);
			}
			return false;
		}
	}

	public CheckoutShopResult buildCheckoutResult(List<CartData> cartItems, String customerAddress) {
		District DistrictCustomer = getDistrict(customerAddress);
		double customerLng = DistrictCustomer.getLongitude();
		double customerLat = DistrictCustomer.getLatitude();
		Map<String, CartData> cartMap = cartItems.stream()
				.collect(Collectors.toMap(CartData::getIdDetail, i -> i, (first, duplicate) -> first));
		Map<String, List<InventoryDTO>> productToAvailableShops = new LinkedHashMap<>();
		Map<String, InventoryDTO> shopInfoMap = new HashMap<>();
		List<String> unfulfilledProducts = new ArrayList<>();

		for (CartData item : cartItems) {
			List<InventoryDTO> availableShops = InventoryShopService.mapToInventoryDTO(
					InventoryShopReponsitory.SelectShopInventoryTotalsByIdDetail(item.getIdDetail()));
			long totalAvailable = availableShops.stream()
					.mapToLong(dto -> dto.getQuantity() == null ? 0 : dto.getQuantity())
					.sum();
			if (totalAvailable < item.getQuantity()) {
				unfulfilledProducts.add(item.getIdDetail());
				continue;
			}
			productToAvailableShops.put(item.getIdDetail(), availableShops);
			availableShops.forEach(dto -> shopInfoMap.putIfAbsent(dto.getIdShop(), dto));
		}

		if (productToAvailableShops.isEmpty()) {
			return new CheckoutShopResult(false, new ArrayList<>(), 0, unfulfilledProducts);
		}

		// Prefer a single nearby shop when it can fulfill every remaining item.
		Set<String> commonShopIds = null;
		for (Map.Entry<String, List<InventoryDTO>> entry : productToAvailableShops.entrySet()) {
			int requestedQuantity = cartMap.get(entry.getKey()).getQuantity();
			Set<String> shopIds = entry.getValue().stream()
					.filter(dto -> dto.getQuantity() >= requestedQuantity)
					.map(InventoryDTO::getIdShop)
					.collect(Collectors.toSet());
			if (commonShopIds == null) {
				commonShopIds = new HashSet<>(shopIds);
			} else {
				commonShopIds.retainAll(shopIds);
			}
		}

		if (commonShopIds != null && !commonShopIds.isEmpty()) {
			InventoryDTO nearest = findNearestShop(new ArrayList<>(commonShopIds), shopInfoMap, customerLat,
					customerLng);

			List<CartItemInShop> allItems = productToAvailableShops.keySet().stream().map(pid -> {
				CartData req = cartMap.get(pid);
				return new CartItemInShop(pid, req.getProductName(), req.getQuantity(), req.getPrice());
			}).collect(Collectors.toList());

			District DistrictShop = getDistrict(nearest.getAddress());
			double distance = calculateDistance(DistrictShop.getLatitude(), DistrictShop.getLongitude(), customerLat,
					customerLng);
			double fee = calculateShippingFee(distance);

			ShopOrderGroup group = new ShopOrderGroup(nearest.getIdShop(), nearest.getNameShop(),
					nearest.getAddress(), distance, fee, allItems);

			return new CheckoutShopResult(false, List.of(group), fee, unfulfilledProducts);
		}

		return splitOrder(productToAvailableShops, shopInfoMap, cartMap, customerLat, customerLng,
				unfulfilledProducts);
	}

	private CheckoutShopResult splitOrder(Map<String, List<InventoryDTO>> productToAvailableShops,
			Map<String, InventoryDTO> shopInfoMap, Map<String, CartData> cartMap, double customerLat,
			double customerLng, List<String> unfulfilledProducts) {

		Map<String, Integer> remainingQuantity = new HashMap<>();
		Map<String, Map<String, Integer>> shopInventory = new TreeMap<>();
		for (Map.Entry<String, List<InventoryDTO>> entry : productToAvailableShops.entrySet()) {
			remainingQuantity.put(entry.getKey(), cartMap.get(entry.getKey()).getQuantity());
			for (InventoryDTO inventory : entry.getValue()) {
				shopInventory.computeIfAbsent(inventory.getIdShop(), key -> new HashMap<>())
						.merge(entry.getKey(), inventory.getQuantity(), Integer::sum);
				shopInfoMap.putIfAbsent(inventory.getIdShop(), inventory);
			}
		}

		List<ShopOrderGroup> groups = new ArrayList<>();
		double totalShipping = 0;

		while (remainingQuantity.values().stream().anyMatch(quantity -> quantity > 0)) {
			String bestShopId = null;
			double bestDistance = Double.POSITIVE_INFINITY;
			for (Map.Entry<String, Map<String, Integer>> shopEntry : shopInventory.entrySet()) {
				boolean canFulfillRemaining = remainingQuantity.entrySet().stream()
						.anyMatch(entry -> Math.min(entry.getValue(),
								shopEntry.getValue().getOrDefault(entry.getKey(), 0)) > 0);
				if (!canFulfillRemaining) {
					continue;
				}
				double distance = calculateDistanceToShop(
						shopInfoMap.get(shopEntry.getKey()), customerLat, customerLng);
				if (bestShopId == null || distance < bestDistance) {
					bestShopId = shopEntry.getKey();
					bestDistance = distance;
				}
			}
			if (bestShopId == null) {
				break;
			}

			InventoryDTO bestShop = shopInfoMap.get(bestShopId);
			List<CartItemInShop> items = new ArrayList<>();
			for (Map.Entry<String, Integer> remaining : remainingQuantity.entrySet()) {
				int stock = shopInventory.get(bestShopId).getOrDefault(remaining.getKey(), 0);
				int allocatedQuantity = Math.min(remaining.getValue(), stock);
				if (allocatedQuantity > 0) {
					CartData request = cartMap.get(remaining.getKey());
					items.add(new CartItemInShop(remaining.getKey(), request.getProductName(), allocatedQuantity,
							request.getPrice()));
					remaining.setValue(remaining.getValue() - allocatedQuantity);
					shopInventory.get(bestShopId).put(remaining.getKey(), stock - allocatedQuantity);
				}
			}
			District coordBest = getDistrict(bestShop.getAddress());
			if (coordBest == null) {
				throw new IllegalStateException(
						"Không xác định được quận/tỉnh của cửa hàng: " + bestShop.getAddress());
			}
			double distance = calculateDistance(coordBest.getLatitude(), coordBest.getLongitude(), customerLat,
					customerLng);
			long fee = calculateShippingFee(distance);
			totalShipping += fee;

			groups.add(new ShopOrderGroup(bestShop.getIdShop(), bestShop.getNameShop(), bestShop.getAddress(),
					distance, fee, items));
		}

		return new CheckoutShopResult(groups.size() > 1, groups, totalShipping, unfulfilledProducts);
	}

	private double calculateDistanceToShop(InventoryDTO shop, double customerLat, double customerLng) {
		District district = getDistrict(shop.getAddress());
		if (district == null) {
			return Double.POSITIVE_INFINITY;
		}
		return calculateDistance(district.getLatitude(), district.getLongitude(), customerLat, customerLng);
	}

	// Tìm shop gần nhất từ danh sách idShop
	private InventoryDTO findNearestShop(List<String> shopIds, Map<String, InventoryDTO> shopInfoMap,
			double customerLat, double customerLng) {
		return shopIds.stream().map(shopInfoMap::get).filter(dto -> dto != null && dto.getAddress() != null)
				.min(Comparator.comparingDouble(dto -> {
					District coord = getDistrict(dto.getAddress());
					if (coord == null) {
// Log để biết địa chỉ nào không tìm được
						System.out.println("Không tìm được district cho địa chỉ: [" + dto.getAddress() + "]");
						return Double.MAX_VALUE; // đẩy shop này xuống cuối
					}
					return calculateDistance(coord.getLatitude(), coord.getLongitude(), customerLat, customerLng);
				})).orElse(null);
	}
	@Transactional(readOnly = true)
	public List<Integer> GetInventoryByShop(String idShop, List<String> idDetailProducts) {

		List<Integer> result = new ArrayList<>();
		for (String idDetailProduct : idDetailProducts) {
			InventoryShop InventoryShop = InventoryShopReponsitory.SelectInventoryShop(idShop, idDetailProduct);
			if (InventoryShop != null) {
				result.add(InventoryShop.getQuantity());
			} else {
				result.add(0);
			}
		}
		return result;
	}
	@Transactional(readOnly = true)
	private District getDistrict(String s) {
		if (s == null || s.isBlank()) {
			return null;
		}
		String address = s;
		if (!address.contains(",")) {
			address = ShopRepository.findById(address)
					.map(Shop::getAddress)
					.orElse(null);
			if (address == null) {
				return null;
			}
		}

		String[] addressParts = address.split(",");
		for (int index = addressParts.length - 2; index >= 0; index--) {
			for (String districtName : addressNameCandidates(addressParts[index], false)) {
				for (String provinceName : addressNameCandidates(addressParts[index + 1], true)) {
					District district = DistrictRepository.findDistrictByNameAndProvince(
							districtName, provinceName);
					if (district != null) {
						return district;
					}
				}
			}
		}
		return null;
	}

	private List<String> addressNameCandidates(String name, boolean province) {
		String normalizedName = name.trim();
		Set<String> candidates = new LinkedHashSet<>();
		candidates.add(normalizedName);
		List<String> adminPrefixes = List.of(
				"Thành phố ", "Tỉnh ", "Quận ", "Huyện ", "Thị xã ", "Phường ", "Xã ", "Thị trấn ");
		for (String prefix : adminPrefixes) {
			if (normalizedName.startsWith(prefix)) {
				normalizedName = normalizedName.substring(prefix.length()).trim();
				break;
			}
		}
		candidates.add(normalizedName);
		List<String> prefixes = province
				? List.of("Tỉnh ", "Thành phố ")
				: List.of("Quận ", "Huyện ", "Thị xã ", "Phường ", "Xã ", "Thị trấn ");
		for (String prefix : prefixes) {
			candidates.add(prefix + normalizedName);
		}
		return new ArrayList<>(candidates);
	}
}
