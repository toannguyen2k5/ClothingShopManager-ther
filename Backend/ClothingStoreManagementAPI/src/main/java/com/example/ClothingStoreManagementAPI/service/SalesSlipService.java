package com.example.ClothingStoreManagementAPI.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.ClothingStoreManagementAPI.repository.*;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import com.example.ClothingStoreManagementAPI.model.ConstData.District;
import com.example.ClothingStoreManagementAPI.model.DTO.*;
import com.example.ClothingStoreManagementAPI.model.DataRequest.*;
import com.example.ClothingStoreManagementAPI.model.Entity.*;
import java.util.*;
import java.util.stream.Collectors;
import java.time.LocalDate;

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
	@Transactional(readOnly = true)
	public List<SalesSlipDTO> SellectAll(int offset, int limit) {
		try {
			List<SalesSlipDTO> result = new ArrayList<>();
			Query query = entityManager.createQuery("SELECT c FROM SalesSlip c", SalesSlip.class);
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
	@Transactional
	public boolean InsertSalesSlip(SalesSlipData salesSlipData, List<ShopDeliveryData> shopDeliveryDatas) {
		String newIdSalesSlip = "";
		Stack<String> idListShops = new Stack<String>();
		try {
			// thêm thông tin phiếu giao hàng
			String idcurrent = SalesSlipRepository.SelectMaxId();
			newIdSalesSlip = idcurrent != null ? common.FindNextId(idcurrent) : common.GetFirstId(SalesSlip.class);
			SalesSlipRepository.save(new SalesSlip(newIdSalesSlip, salesSlipData.getIdCreater(),
					salesSlipData.getIdClient(), salesSlipData.getCreateDate(), salesSlipData.getDeliveryAddress(),
					salesSlipData.getTotalBill(), salesSlipData.getShippingFee(),"Scd001", salesSlipData.getNote(),
					null, null, null, salesSlipData.getDiscountcode(), null, null)); // thêm brand vào csdl
			SalesSlipRepository.flush();
			Set<Boolean> statusCreate = new HashSet<>();
			statusCreate.add(SalesSlipRepository.existsById(newIdSalesSlip));
			if (!statusCreate.contains(false)) {
				// tạo phiếu thành công
				for (ShopDeliveryData ShopDeliveryData : shopDeliveryDatas) {
					String newidList = ListOfDeliveryStoresService.InsertListOfDeliveryStores(
							new ListOfDeliveryStores(null, newIdSalesSlip, ShopDeliveryData.getIdShop(), false));
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
					SalesSlipRepository.deleteById(newIdSalesSlip); // xóa phiếu nếu có lỗi
					for (String idListShop : idListShops) {
						ListOfDeliveryStoresService.DeleteListOfDeliveryStores(idListShop); // xóa list
						DetailSalesSlipService.DeleteDetailSalesSlipByIdList(idListShop);
					}
				}
				return false;
			} else {
				for (ShopDeliveryData ShopDeliveryData : shopDeliveryDatas) {
					for (CartData ShoppingCartData : ShopDeliveryData.getShoppingCartData()) {
						ShoppingCart shoppingCart = shoppingCartRepository
								.SelectShoppingCart(salesSlipData.getIdClient(),ShoppingCartData.getIdDetail());
						if (shoppingCart != null) {
							shoppingCartRepository.deleteById(shoppingCart.getIdShoppingCart());
						}
					}
				}
				return true;
			}
		} catch (Exception e) {
			SalesSlipRepository.deleteById(newIdSalesSlip); // xóa phiếu nếu có lỗi
			for (String idListShop : idListShops) {
				ListOfDeliveryStoresService.DeleteListOfDeliveryStores(idListShop); // xóa list
				DetailSalesSlipService.DeleteDetailSalesSlipByIdList(idListShop);
			}
			System.out.print("InsertSalesSlip, Error : " + e.getMessage());
			return false;
		}
	}

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
			return SalesSlipRepository.updateStatusSalesSlip(SalesSlip.getIdSalesSlip(),
					SalesSlip.getDeliveryStatus()) > 0;
		} catch (Exception e) {
			System.out.print("UpdateSalesSlip, Error : " + e.getMessage());
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
					DetailedRefundSlip.getIdDetail(), DetailedRefundSlip.getIdDetail(),
					DetailedRefundSlip.getIdDetail(), DetailedRefundSlip.getIdDetail()) > 0;
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
		// B1: Với mỗi sản phẩm, tìm các shop có ĐỦ số lượng cần
		// Map: idDetailProduct -> List<InventoryDTO> (shop đủ hàng)
		Map<String, List<InventoryDTO>> productToValidShops = new HashMap<>();

		for (CartData item : cartItems) {
			List<InventoryDTO> allShops = InventoryShopService
					.mapToInventoryDTO(InventoryShopReponsitory.SelecShopByIdDetail(item.getIdDetail()));

			List<InventoryDTO> validShops = allShops.stream().filter(dto -> dto.getQuantity() >= item.getQuantity())
					.collect(Collectors.toList());

			productToValidShops.put(item.getIdDetail(), validShops);
		}

		// B2: Phát hiện sản phẩm nào không có shop nào đủ hàng
		List<String> unfulfilledProducts = productToValidShops.entrySet().stream().filter(e -> e.getValue().isEmpty())
				.map(Map.Entry::getKey).collect(Collectors.toList());

		// Loại sản phẩm không fulfill được ra khỏi bài toán
		productToValidShops.keySet().removeAll(unfulfilledProducts);

		if (productToValidShops.isEmpty()) {
			return new CheckoutShopResult(false, new ArrayList<>(), 0, unfulfilledProducts);
		}

		// B3: Tìm shop đơn có đủ TẤT CẢ sản phẩm (intersection)
		Set<String> commonShopIds = null;
		Map<String, InventoryDTO> shopInfoMap = new HashMap<>(); // idShop -> InventoryDTO

		for (List<InventoryDTO> shops : productToValidShops.values()) {
			Set<String> shopIds = new HashSet<>();
			for (InventoryDTO dto : shops) {
				shopIds.add(dto.getIdShop());
				shopInfoMap.putIfAbsent(dto.getIdShop(), dto);
			}
			if (commonShopIds == null) {
				commonShopIds = new HashSet<>(shopIds);
			} else {
				commonShopIds.retainAll(shopIds); // giao tập
			}
		}

		Map<String, CartData> cartMap = cartItems.stream().collect(Collectors.toMap(CartData::getIdDetail, i -> i));

		// Có shop đủ tất cả -> chọn gần nhất
		if (commonShopIds != null && !commonShopIds.isEmpty()) {
			InventoryDTO nearest = findNearestShop(new ArrayList<>(commonShopIds), shopInfoMap, customerLat,
					customerLng);

			List<CartItemInShop> allItems = productToValidShops.keySet().stream().map(pid -> {
				CartData req = cartMap.get(pid);
				return new CartItemInShop(pid, req.getProductName(), req.getQuantity(), req.getPrice());
			}).collect(Collectors.toList());

			District DistrictShop = getDistrict(nearest.getAddress());
			double distance = calculateDistance(DistrictShop.getLatitude(), DistrictShop.getLongitude(), customerLat,
					customerLng);
			double fee = calculateShippingFee(distance);

			ShopOrderGroup group = new ShopOrderGroup(nearest.getIdShop(), nearest.getNameShop(), distance, fee,
					allItems);

			return new CheckoutShopResult(false, List.of(group), fee, unfulfilledProducts);
		}

		// B4: Không có shop đơn nào đủ -> tách đơn (Greedy)
		return splitOrder(productToValidShops, shopInfoMap, cartMap, customerLat, customerLng, unfulfilledProducts);
	}

	private CheckoutShopResult splitOrder(Map<String, List<InventoryDTO>> productToValidShops,
			Map<String, InventoryDTO> shopInfoMap, Map<String, CartData> cartMap, double customerLat,
			double customerLng, List<String> unfulfilledProducts) {

		Set<String> unassigned = new HashSet<>(productToValidShops.keySet());
		List<ShopOrderGroup> groups = new ArrayList<>();
		double totalShipping = 0;

		while (!unassigned.isEmpty()) {
			// Với mỗi shop, đếm xem nó cover được bao nhiêu sản phẩm còn chưa assign
			Map<String, Set<String>> shopCoverMap = new HashMap<>();

			for (String productId : unassigned) {
				for (InventoryDTO dto : productToValidShops.get(productId)) {
					shopCoverMap.computeIfAbsent(dto.getIdShop(), k -> new HashSet<>()).add(productId);
					shopInfoMap.putIfAbsent(dto.getIdShop(), dto);
				}
			}

			if (shopCoverMap.isEmpty())
				break;

			// Chọn shop: ưu tiên cover nhiều nhất, tie-break bằng gần nhất
			String bestShopId = shopCoverMap.entrySet().stream().max(Comparator
					.comparingInt((Map.Entry<String, Set<String>> e) -> e.getValue().size()).thenComparingDouble(e -> {
						District coord = getDistrict(shopInfoMap.get(e.getKey()).getAddress());
						if (coord == null) {
							System.out.println(
									"Không tìm được district cho: [" + shopInfoMap.get(e.getKey()).getAddress() + "]");
							return Double.MAX_VALUE;
						}
						return -calculateDistance(coord.getLatitude(), coord.getLongitude(), customerLat, customerLng);
					})).map(Map.Entry::getKey).orElse(null);

			if (bestShopId == null)
				break;

			Set<String> coveredProducts = shopCoverMap.get(bestShopId);
			InventoryDTO bestShop = shopInfoMap.get(bestShopId);

			List<CartItemInShop> items = coveredProducts.stream().map(pid -> {
				CartData req = cartMap.get(pid);
				return new CartItemInShop(pid, req.getProductName(), req.getQuantity(), req.getPrice());
			}).collect(Collectors.toList());

			District coordBest = getDistrict(bestShop.getAddress());
			double distance = calculateDistance(coordBest.getLatitude(), coordBest.getLongitude(), customerLat,
					customerLng);
			long fee = calculateShippingFee(distance);
			totalShipping += fee;

			groups.add(new ShopOrderGroup(bestShop.getIdShop(), bestShop.getNameShop(), distance, fee, items));

			unassigned.removeAll(coveredProducts);
		}

		return new CheckoutShopResult(true, groups, totalShipping, unfulfilledProducts);
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
		if (!s.contains(",")) {
			String[] shopAddress = ShopRepository.findById(s).get().getAddress().split(",");
			District District = DistrictRepository.findDistrictByNameAndProvince(
					shopAddress[shopAddress.length - 2].trim(), shopAddress[shopAddress.length - 1].trim());
			return District;
		} else {
			String[] shopAddress = s.split(",");
			District District = DistrictRepository.findDistrictByNameAndProvince(
					shopAddress[shopAddress.length - 2].trim(), shopAddress[shopAddress.length - 1].trim());
			return District;
		}
	}
}
