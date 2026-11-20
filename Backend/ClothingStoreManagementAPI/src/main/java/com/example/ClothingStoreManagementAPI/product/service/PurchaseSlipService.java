package com.example.ClothingStoreManagementAPI.product.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.product.repository.*;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import com.example.ClothingStoreManagementAPI.product.model.DTO.DetailPurchaseSlipDTO;
import com.example.ClothingStoreManagementAPI.product.model.DTO.ProductDTO;
import com.example.ClothingStoreManagementAPI.product.model.DTO.PurchaseSlipDTO;
import com.example.ClothingStoreManagementAPI.product.model.DTO.ReverseRetrievalDProductDTO;
import com.example.ClothingStoreManagementAPI.product.model.DataRequest.*;
import com.example.ClothingStoreManagementAPI.product.model.Entity.*;
import java.util.*;
import java.time.LocalDate;

@Service
public class PurchaseSlipService {
	@Autowired
	private PurchaseSlipRepository PurchaseSlipRepository;
	@Autowired
	private SizeRepository SizeRepository;
	@Autowired
	private DetailProductRepository DetailProductRepository;
	@Autowired
	private DetailProductService DetailProductService;
	@Autowired
	private ListOfReceivingStoresService ListOfReceivingStoresService;
	@Autowired
	private DetailPurchaseSlipService DetailPurchaseSlipService;
	@Autowired
	private PriceService PriceService;
	@Autowired
	private ShopService shopService;
	@Autowired
	private Common common;
	@Autowired
	private InventoryShopReponsitory InventoryShopReponsitory;
	@Autowired
	private EntityManager entityManager;
	@Autowired
	private UserRepository UserRepository;
	@Autowired
	private SupplierRepository SupplierRepository;
	@Transactional(readOnly = true)
	public String SelectMaxId() {
		try {
			return PurchaseSlipRepository.SelectMaxId();
		} catch (Exception e) {
			System.out.print("SelectMaxId, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional(readOnly = true)
	public List<PurchaseSlipDTO> SellectAll(int offset, int limit) {
		try {
			List<PurchaseSlipDTO> result = new ArrayList<>();
			Query query = entityManager.createQuery("SELECT c FROM PurchaseSlip c", PurchaseSlip.class);
			if (offset > 0)
				query.setFirstResult(offset); // OFFSET
			if (limit > 0)
				query.setMaxResults(limit); // LIMIT
			List<PurchaseSlip> PurchaseSlips = query.getResultList();
			for (PurchaseSlip PurchaseSlip : PurchaseSlips) {
				result.add(new PurchaseSlipDTO(PurchaseSlip.getIdPurchaseSlip(),
						UserRepository.SellectFullName(PurchaseSlip.getIdCreater()),
						SupplierRepository.SellectFullName(PurchaseSlip.getIdSupplier()), PurchaseSlip.getDayCreate(),
						PurchaseSlip.getTotalBill(), PurchaseSlip.getApproveStatus(),
						PurchaseSlip.getStatusUpdateDate(),
						UserRepository.SellectFullName(PurchaseSlip.getIdStatusEditor()),
						PurchaseSlip.isStatusReceive()));
			}
			return result;
		} catch (Exception e) {
			System.out.print("SelectPurchaseSlip all, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional(readOnly = true)
	public List<DetailPurchaseSlipDTO> SellectDetailPurchaseSlip(String idPurchaseSlip) {
		try {
			List<DetailPurchaseSlipDTO> result = new ArrayList<>();
			List<ListOfReceivingStores> ListOfReceivingStoress = ListOfReceivingStoresService
					.SellectListOfReceivingStores(idPurchaseSlip);
			for (ListOfReceivingStores ListOfReceivingStores : ListOfReceivingStoress) {
				List<DetailPurchaseSlip> DetailPurchaseSlips = DetailPurchaseSlipService
						.SellectDetailPurchaseSlip(ListOfReceivingStores.getIdList());
				for (DetailPurchaseSlip detailPurchaseSlip : DetailPurchaseSlips) {
					ReverseRetrievalDProductDTO ReverseRetrievalDProductDTO = DetailProductRepository
							.ReverseRetrievalDProduct(detailPurchaseSlip.getIdDetailProduct());
					Optional<Shop> shop = shopService.getShop(ListOfReceivingStores.getIdShop());
					result.add(new DetailPurchaseSlipDTO(ListOfReceivingStores.getIdShop(), shop.get().getNameShop(),
							DetailProductRepository.SelectIdDetailByIdPro(detailPurchaseSlip.getIdDetailProduct()),
							ReverseRetrievalDProductDTO.getNameProduct(), detailPurchaseSlip.getPrice(),
							detailPurchaseSlip.getQuantity(), ReverseRetrievalDProductDTO.getNameColor(),
							ReverseRetrievalDProductDTO.getNameSize()));
				}
			}
			return result;
		} catch (Exception e) {
			System.out.print("SellectDetailPurchaseSlip, Error : " + e.getMessage());
			return null;
		}
	}

	// tìm kiếm thông tin đơn hàng bằng mã khách hàng , ngày , mã người tạo
	@Transactional(readOnly = true)
	public List<PurchaseSlip> SelectPurchaseSlipByidSupplier(String idSupplier) {
		try {
			return PurchaseSlipRepository.SelectPurchaseSlipByidSupplier(idSupplier);
		} catch (Exception e) {
			System.out.print("SelectPurchaseSlipByIdClient, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional(readOnly = true)
	public List<PurchaseSlip> SellectPurchaseSlipByDate(LocalDate createDate) {
		try {
			return PurchaseSlipRepository.SellectPurchaseSlipByDate(createDate);
		} catch (Exception e) {
			System.out.print("SellectPurchaseSlipByDate, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional(readOnly = true)
	public List<PurchaseSlip> SellectPurchaseSlipByIdCreater(String IdCreater) {
		try {
			return PurchaseSlipRepository.SellectPurchaseSlipByIdCreater(IdCreater);
		} catch (Exception e) {
			System.out.print("SellectPurchaseSlipByIdCreater, Error : " + e.getMessage());
			return null;
		}
	}

	// tạo phiếu
	@Transactional
	public boolean InsertPurchaseSlip(PurchaseSlip PurchaseSlip, List<ShopReceiveData> ShopReceiveDatas) {
		String newIdPurchaseSlip = "";
		Stack<String> idListShops = new Stack<String>();
		List<String> newDetailProduct = new ArrayList<>();
		try {
			// thêm chi tiết hàng mới nếu có
			for (ShopReceiveData ShopReceiveData : ShopReceiveDatas) {
				for (ShoppingCartData ShoppingCartData : ShopReceiveData.getShoppingCartDatas()) {
					String idSize = SizeRepository.SelectIdSize(ShoppingCartData.getNameSize());
					if (DetailProductRepository.SelectIdDetailProduct(ShoppingCartData.getIdProduct(),
							ShoppingCartData.getNameColor(), idSize) == null) {
						String idcurrent = DetailProductRepository.SelectMaxId();
						String newId = idcurrent != null ? common.FindNextId(idcurrent)
								: common.GetFirstId(DetailProduct.class);
						newDetailProduct.add(newId);
						DetailProductService.InsertDetailProduct(
								new DetailProduct(null, ShoppingCartData.getSeri(), idSize, LocalDate.now(), false,
										ShoppingCartData.getIdProduct(), false, ShoppingCartData.getNameColor()));
					}
				}
			}
			// thêm thông tin phiếu giao hàng
			String idcurrent = PurchaseSlipRepository.SelectMaxId();
			newIdPurchaseSlip = idcurrent != null ? common.FindNextId(idcurrent)
					: common.GetFirstId(PurchaseSlip.class);
			PurchaseSlipRepository.save(new PurchaseSlip(newIdPurchaseSlip, PurchaseSlip.getIdCreater(),
					PurchaseSlip.getIdSupplier(), PurchaseSlip.getDayCreate(), PurchaseSlip.getTotalBill(),
					PurchaseSlip.getApproveStatus(), PurchaseSlip.getStatusUpdateDate(),
					PurchaseSlip.getIdStatusEditor(), PurchaseSlip.isStatusReceive())); // thêm brand vào csdl
			PurchaseSlipRepository.flush();
			Set<Boolean> statusCreate = new HashSet<>();
			statusCreate.add(PurchaseSlipRepository.existsById(newIdPurchaseSlip));
			if (!statusCreate.contains(false)) {
				// tạo phiếu thành công
				for (ShopReceiveData ShopReceiveData : ShopReceiveDatas) {
					
					HashMap<Boolean,String> resultList = ListOfReceivingStoresService.InsertListOfReceivingStores(
							new ListOfReceivingStores(null, newIdPurchaseSlip, ShopReceiveData.getIdShop(), false));
					if(resultList.containsKey(true)) {
						statusCreate.add(true);
						idListShops.push(resultList.get(true));
					} else statusCreate.add(false);
					if (!statusCreate.contains(false)) {
						for (ShoppingCartData ShoppingCartData : ShopReceiveData.getShoppingCartDatas()) {
							String idDetai = DetailProductRepository.SelectIdDetailProduct(
									ShoppingCartData.getIdProduct(), ShoppingCartData.getNameColor(),
									SizeRepository.SelectIdSize(ShoppingCartData.getNameSize()));
							statusCreate
									.add(DetailPurchaseSlipService.InsertDetailPurchaseSlip(new DetailPurchaseSlip(null,
											idListShops.peek(), idDetai, ShoppingCartData.getQuantity(),
											PriceService.FindPriceCurrent(ShoppingCartData.getIdProduct()))));
							if (statusCreate.contains(false))
								break;
						}
						if (statusCreate.contains(false))
							break;
					} else
						break;
				}
			}
			if (statusCreate.contains(false)) {
				if (!idListShops.empty()) {
					PurchaseSlipRepository.deleteById(newIdPurchaseSlip); // xóa phiếu nếu có lỗi
					for (String idListShop : idListShops) {
						ListOfReceivingStoresService.DeleteListOfReceivingStores(idListShop); // xóa list
						DetailPurchaseSlipService.DeleteDetailSalesSlipByIdList(idListShop);
					}
				}
				if (!newDetailProduct.isEmpty()) {
					for (String item : newDetailProduct) {
						DetailProductRepository.deleteById(item);
					}
				}
				return false;
			} else
				return true;
		} catch (Exception e) {
			PurchaseSlipRepository.deleteById(newIdPurchaseSlip); // xóa phiếu nếu có lỗi
			for (String idListShop : idListShops) {
				ListOfReceivingStoresService.DeleteListOfReceivingStores(idListShop); // xóa list
				DetailPurchaseSlipService.DeleteDetailSalesSlipByIdList(idListShop);
			}
			for (String item : newDetailProduct) {
				DetailProductRepository.deleteById(item);
			}
			System.out.print("InsertPurchaseSlip, Error : " + e.getMessage());
			return false;
		}
	}

	// chỉ cập nhật thông tin đơn hàng
	@Transactional
	public boolean UpdatePurchaseSlip(PurchaseSlip PurchaseSlip) {
		try {
			if (!PurchaseSlip.isStatusReceive()) {
				return PurchaseSlipRepository.UpdatePurchaseSlip(PurchaseSlip.getIdPurchaseSlip(),
						PurchaseSlip.getIdCreater(), PurchaseSlip.getIdSupplier(), PurchaseSlip.getDayCreate(),
						PurchaseSlip.getTotalBill(), PurchaseSlip.getApproveStatus(),
						PurchaseSlip.getStatusUpdateDate(), PurchaseSlip.getIdStatusEditor(),
						PurchaseSlip.isStatusReceive()) > 0;
			} else
				return false;
		} catch (Exception e) {
			System.out.print("UpdatePurchaseSlip, Error : " + e.getMessage());
			return false;
		}
	}

	@Transactional
	public boolean updateStatusPurchaseSlip(PurchaseSlip PurchaseSlip) {
		try {
			return PurchaseSlipRepository.updateStatusPurchaseSlip(PurchaseSlip.getIdPurchaseSlip(),
					PurchaseSlip.getApproveStatus(), PurchaseSlip.getStatusUpdateDate(),
					PurchaseSlip.getIdStatusEditor()) > 0;
		} catch (Exception e) {
			System.out.print("UpdatePurchaseSlip, Error : " + e.getMessage());
			return false;
		}
	}

	// cập nhật thông tin danh sách shop của đơn hàng

	@Transactional
	public boolean UpdatePurchaseSlip(PurchaseSlip purchaseSlip,List<ShopReceiveData> shopReceiveDatas) {
		try {
	        if (purchaseSlip.isStatusReceive()) return false;
	
	        // 1. Xóa danh sách kho cũ
	        List<ListOfReceivingStores> receivingStores = ListOfReceivingStoresService.SellectListOfReceivingStores(purchaseSlip.getIdPurchaseSlip());
	        for (ListOfReceivingStores receivingStore : receivingStores) {
	            DetailPurchaseSlipService.DeleteDetailSalesSlipByIdList(
	                receivingStore.getIdList()
	            );
	        }
	        ListOfReceivingStoresService.DeleteListOfReceivingStoresidPurchaseSlip(purchaseSlip.getIdPurchaseSlip());
	        // 2. Tạo danh sách kho mới
	        for (ShopReceiveData shopData : shopReceiveDatas) {
	            HashMap<Boolean, String> resultList =
	                ListOfReceivingStoresService.InsertListOfReceivingStores(
	                    new ListOfReceivingStores(
	                        null,
	                        purchaseSlip.getIdPurchaseSlip(),
	                        shopData.getIdShop(),
	                        false
	                    )
	                );
	            if (!resultList.containsKey(true)) throw new RuntimeException("Không thể tạo danh sách kho");
	            
	            String idList = resultList.get(true);
	            
	            // 3. Tạo chi tiết phiếu nhập
	            for (ShoppingCartData cartData : shopData.getShoppingCartDatas()) {
	                String idDetail = DetailProductRepository.SelectIdDetailProduct(cartData.getIdProduct(),cartData.getNameColor(),SizeRepository.SelectIdSize(cartData.getNameSize()));
	
	                boolean inserted =
	                    DetailPurchaseSlipService.InsertDetailPurchaseSlip(
	                        new DetailPurchaseSlip(
	                            null,
	                            idList,
	                            idDetail,
	                            cartData.getQuantity(),
	                            cartData.getPrice()
	                        )
	                    );
	
	                if (!inserted) throw new RuntimeException("Không thể tạo chi tiết phiếu nhập");
	            }
	        }
	
	        // 4. Cập nhật thông tin phiếu nhập
	        boolean updated = UpdatePurchaseSlip(purchaseSlip);
	        if (!updated) throw new RuntimeException("Không thể cập nhật phiếu nhập");
	        return true;
	
	    } catch (Exception e) {
	        System.err.println("UpdatePurchaseSlip Error: " + e.getMessage());
	        TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
	        return false;
	    }
	}


	// xóa phiếu
	@Transactional
	public boolean DeletePurchaseSlip(String idPurchaseSlip) {
		try {
			// tìm kiếm thông tin phiếu
			Optional<PurchaseSlip> PurchaseSlip = PurchaseSlipRepository.findById(idPurchaseSlip);
			if (!PurchaseSlip.isPresent()) {
				throw new RuntimeException("Không tìm thấy hóa đơn với ID: " + idPurchaseSlip);
			} else {
				if (!PurchaseSlip.get().isStatusReceive()) {
					List<ListOfReceivingStores> ListOfReceivingStores = ListOfReceivingStoresService
							.SellectListOfReceivingStores(idPurchaseSlip);
					for (ListOfReceivingStores ReceivingStore : ListOfReceivingStores) {
						DetailPurchaseSlipService.DeleteDetailSalesSlipByIdList(ReceivingStore.getIdList());
					}
					ListOfReceivingStoresService.DeleteListOfReceivingStoresidPurchaseSlip(idPurchaseSlip);
					PurchaseSlipRepository.deleteById(idPurchaseSlip);
					return !PurchaseSlipRepository.existsById(idPurchaseSlip);
				} else
					return false;
			}
		} catch (Exception e) {
			System.out.print("DeletePurchaseSlip, Error : " + e.getMessage());
			return false;
		}
	}

	@Transactional(rollbackFor = Exception.class)
	public boolean UpdateInventoryPurchaseSlip(ListOfReceivingStores listOfReceivingStores,List<DetailPurchaseSlip> detailPurchaseSlips) {
		try {
			// Kiểm tra phiếu đã được xác nhận chưa
			if (listOfReceivingStores.isStatus()) {
				return false;
			}
			// Cập nhật số lượng tồn kho
			for (DetailPurchaseSlip detail : detailPurchaseSlips) {

				InventoryShop inventory = InventoryShopReponsitory
						.SelectInventoryShop(
								listOfReceivingStores.getIdShop(),
								detail.getIdDetail()
						);

				if (inventory == null) {
					throw new RuntimeException(
							"Không tìm thấy sản phẩm trong kho"
					);
				}

				int newQuantity = inventory.getQuantity()
						+ detail.getQuantity();

				long result = InventoryShopReponsitory.UpdateInventoryShop(newQuantity,listOfReceivingStores.getIdShop(),detail.getIdDetail());

				if (result <= 0) {
					throw new RuntimeException(
							"Cập nhật tồn kho thất bại"
					);
				}
			}

			// Cập nhật trạng thái phiếu nhập
			listOfReceivingStores.setStatus(true);

			boolean result = ListOfReceivingStoresService
					.UpdateListOfReceivingStores(listOfReceivingStores);

			if (!result) {
				throw new RuntimeException(
						"Cập nhật trạng thái phiếu nhập thất bại"
				);
			}

			return true;

		} catch (Exception e) {
			System.err.println(
					"UpdateInventoryPurchaseSlip Error: " + e.getMessage()
			);

		TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
		return false;
		}
	}
}
