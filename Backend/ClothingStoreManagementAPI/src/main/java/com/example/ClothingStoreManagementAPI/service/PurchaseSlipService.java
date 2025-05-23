package com.example.ClothingStoreManagementAPI.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.repository.*;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import com.example.ClothingStoreManagementAPI.model.DTO.ProductDTO;
import com.example.ClothingStoreManagementAPI.model.DataRequest.*;
import com.example.ClothingStoreManagementAPI.model.Entity.*;
import java.util.*;
import java.time.LocalDate ;
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
	private Common common;
	@Autowired
	private InventoryShopReponsitory InventoryShopReponsitory;
	public String SelectMaxId() {
		try{
			return PurchaseSlipRepository.SelectMaxId();
		}
		catch(Exception e) {
			System.out.print("SelectMaxId, Error : " + e.getMessage());
			return null;
		}
	}
	// tìm kiếm thông tin đơn hàng bằng mã khách hàng , ngày , mã người tạo
	public List<PurchaseSlip> SelectPurchaseSlipByidSupplier(String idSupplier) {
		try{
			return PurchaseSlipRepository.SelectPurchaseSlipByidSupplier(idSupplier);
		}
		catch(Exception e) {
			System.out.print("SelectPurchaseSlipByIdClient, Error : " + e.getMessage());
			return null;
		}
	}
	public List<PurchaseSlip> SellectPurchaseSlipByDate(LocalDate createDate){
		try{
			return PurchaseSlipRepository.SellectPurchaseSlipByDate(createDate);
		}
		catch(Exception e) {
			System.out.print("SellectPurchaseSlipByDate, Error : " + e.getMessage());
			return null;
		}
	}
	public List<PurchaseSlip> SellectPurchaseSlipByIdCreater(String IdCreater){
		try{
			return PurchaseSlipRepository.SellectPurchaseSlipByIdCreater(IdCreater);
		}
		catch(Exception e) {
			System.out.print("SellectPurchaseSlipByIdCreater, Error : " + e.getMessage());
			return null;
		}
	}
	// tạo phiếu
	public boolean InsertPurchaseSlip(PurchaseSlip PurchaseSlip, List<ShopReceiveData> ShopReceiveDatas){
		String newIdPurchaseSlip = "";
		Stack<String> idListShops = new Stack<String>();
		List<String> newDetailProduct = new ArrayList<>();
		try {
			// thêm chi tiết hàng mới nếu có 
			for(ShopReceiveData ShopReceiveData : ShopReceiveDatas) {
				for(ShoppingCartData ShoppingCartData : ShopReceiveData.getShoppingCartDatas()) {
					String idSize = SizeRepository.SelectIdSize(ShoppingCartData.getNameSize());
					if(DetailProductRepository.SelectIdDetailProduct(ShoppingCartData.getIdProduct(),ShoppingCartData.getNameColor(),idSize)==null) {
						String idcurrent = DetailProductRepository.SelectMaxId();
						String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(DetailProduct.class);
						newDetailProduct.add(newId);
						DetailProductService.InsertDetailProduct(new DetailProduct(null,ShoppingCartData.getSeri(),idSize,LocalDate.now(),false,ShoppingCartData.getIdProduct(),false,ShoppingCartData.getNameColor()));
					}
				}
			}
			// thêm thông tin phiếu giao hàng
			String idcurrent = PurchaseSlipRepository.SelectMaxId();
			newIdPurchaseSlip = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(PurchaseSlip.class);
			PurchaseSlipRepository.save(new PurchaseSlip (newIdPurchaseSlip,PurchaseSlip.getIdCreater(),PurchaseSlip.getIdSupplier(),PurchaseSlip.getDayCreate(),
					PurchaseSlip.getTotalBill(),PurchaseSlip.isApproveStatus(),PurchaseSlip.getStatusUpdateDate(),PurchaseSlip.getIdStatusEditor(),PurchaseSlip.isStatusReceive())); // thêm brand vào csdl
			PurchaseSlipRepository.flush();
			Set<Boolean> statusCreate = new HashSet<>();
			statusCreate.add(PurchaseSlipRepository.existsById(newIdPurchaseSlip));
			if(!statusCreate.contains(false)){
				// tạo phiếu thành công
				for(ShopReceiveData ShopReceiveData : ShopReceiveDatas) {
					statusCreate.add(ListOfReceivingStoresService.InsertListOfReceivingStores(new ListOfReceivingStores(null,newIdPurchaseSlip,ShopReceiveData.getIdShop(),false)));
					if(!statusCreate.contains(false)) {
						idListShops.push(ShopReceiveData.getIdShop());
						for(ShoppingCartData ShoppingCartData : ShopReceiveData.getShoppingCartDatas()) {
							String idDetai = DetailProductRepository.SelectIdDetailProduct(ShoppingCartData.getIdProduct(),ShoppingCartData.getNameColor(),SizeRepository.SelectIdSize(ShoppingCartData.getNameSize()));
							statusCreate.add(DetailPurchaseSlipService.InsertDetailPurchaseSlip(new DetailPurchaseSlip(null,idListShops.peek(),idDetai,
									ShoppingCartData.getQuantity(),PriceService.FindPriceCurrent(ShoppingCartData.getIdProduct()))));
							if(statusCreate.contains(false)) break;
						}
						if(statusCreate.contains(false)) break;
					}
					else break;
				}
			}
			if(statusCreate.contains(false)) {
				if(!idListShops.empty()) {
					PurchaseSlipRepository.deleteById(newIdPurchaseSlip); // xóa phiếu nếu có lỗi
					for(String idListShop : idListShops) {
						ListOfReceivingStoresService.DeleteListOfReceivingStores(idListShop); // xóa list
						DetailPurchaseSlipService.DeleteDetailSalesSlipByIdList(idListShop);
					}
				}
				if(!newDetailProduct.isEmpty()) {
					for(String item : newDetailProduct) {
						DetailProductRepository.deleteById(item);
					}
				}
				return false;
			}
			else return true;
		}
		catch(Exception e) {
			PurchaseSlipRepository.deleteById(newIdPurchaseSlip); // xóa phiếu nếu có lỗi
			for(String idListShop : idListShops) {
				ListOfReceivingStoresService.DeleteListOfReceivingStores(idListShop); // xóa list
				DetailPurchaseSlipService.DeleteDetailSalesSlipByIdList(idListShop);
			}
			for(String item : newDetailProduct) {
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
				if(PurchaseSlip.isStatusReceive()) {
					return PurchaseSlipRepository.UpdatePurchaseSlip(PurchaseSlip.getIdPurchaseSlip(),PurchaseSlip.getIdCreater(),PurchaseSlip.getIdSupplier(),
							PurchaseSlip.getDayCreate(),PurchaseSlip.getTotalBill(),PurchaseSlip.isApproveStatus(),PurchaseSlip.getStatusUpdateDate(),
							PurchaseSlip.getIdStatusEditor(),PurchaseSlip.isStatusReceive()) > 0;
				}
				else return false;
			}
		catch(Exception e) {
			System.out.print("UpdatePurchaseSlip, Error : " + e.getMessage());
			return false;
		}
	}
	// cập nhật thông tin danh sách shop của đơn hàng
	@Transactional
	public boolean UpdatePurchaseSlip(PurchaseSlip PurchaseSlip, List<ShopReceiveData> ShopReceiveDatas) {
		try {
			if(!PurchaseSlip.isStatusReceive()) {
				// xóa danh sách kho các kiểu
				List<ListOfReceivingStores> ListOfReceivingStores = ListOfReceivingStoresService.SellectListOfReceivingStores(PurchaseSlip.getIdPurchaseSlip());
				for(ListOfReceivingStores ReceivingStore : ListOfReceivingStores) {
					DetailPurchaseSlipService.DeleteDetailSalesSlipByIdList(ReceivingStore.getIdList());
				}
				ListOfReceivingStoresService.DeleteListOfReceivingStoresidPurchaseSlip(PurchaseSlip.getIdPurchaseSlip());
				
				// thêm danh sách phiếu lại khi thay đổi
				Set<Boolean> statusCreate = new HashSet<>();
				Stack<String> idListShops = new Stack<String>();
				if(!statusCreate.contains(false)){
					// tạo phiếu thành công
					for(ShopReceiveData ShopReceiveData : ShopReceiveDatas) {
						statusCreate.add(ListOfReceivingStoresService.InsertListOfReceivingStores(new ListOfReceivingStores(null,PurchaseSlip.getIdPurchaseSlip(),ShopReceiveData.getIdShop(),false)));
						if(!statusCreate.contains(false)) {
							idListShops.push(ShopReceiveData.getIdShop());
							for(ShoppingCartData ShoppingCartData : ShopReceiveData.getShoppingCartDatas()) {
								String idDetai = DetailProductRepository.SelectIdDetailProduct(ShoppingCartData.getIdProduct(),ShoppingCartData.getNameColor(),SizeRepository.SelectIdSize(ShoppingCartData.getNameSize()));
								statusCreate.add(DetailPurchaseSlipService.InsertDetailPurchaseSlip(new DetailPurchaseSlip(null,idListShops.peek(),idDetai,
										ShoppingCartData.getQuantity(),ShoppingCartData.getPrice())));
								if(statusCreate.contains(false)) break;
							}
							if(statusCreate.contains(false)) break;
						}
						else break;
					}
				}
				if(statusCreate.contains(false)) {
					if(!idListShops.empty()) {
						PurchaseSlipRepository.deleteById(PurchaseSlip.getIdPurchaseSlip()); // xóa phiếu nếu có lỗi
						for(String idListShop : idListShops) {
							ListOfReceivingStoresService.DeleteListOfReceivingStores(idListShop); // xóa list
							DetailPurchaseSlipService.DeleteDetailSalesSlipByIdList(idListShop);
						}
					}
					return false;
				}
				else return UpdatePurchaseSlip(PurchaseSlip) && true;
			}
			else return false;
		}
		catch(Exception e) {
			System.out.print("UpdatePurchaseSlip, Error : " + e.getMessage());
			return false;
		}
	}
	// xóa phiếu
	@Transactional
	public boolean DeletePurchaseSlip(String idPurchaseSlip) {
		try {
			// tìm kiếm thông tin phiếu
			Optional<PurchaseSlip> PurchaseSlip = PurchaseSlipRepository.findById(idPurchaseSlip);
			if(!PurchaseSlip.isPresent()) {
				throw new RuntimeException("Không tìm thấy hóa đơn với ID: " + idPurchaseSlip);
			}
			else {
					if(!PurchaseSlip.get().isStatusReceive()) {
						List<ListOfReceivingStores> ListOfReceivingStores = ListOfReceivingStoresService.SellectListOfReceivingStores(idPurchaseSlip);
						for(ListOfReceivingStores ReceivingStore : ListOfReceivingStores) {
							DetailPurchaseSlipService.DeleteDetailSalesSlipByIdList(ReceivingStore.getIdList());
						}
						ListOfReceivingStoresService.DeleteListOfReceivingStoresidPurchaseSlip(idPurchaseSlip);
						PurchaseSlipRepository.deleteById(idPurchaseSlip);
						return !PurchaseSlipRepository.existsById(idPurchaseSlip);
					}
					else return false;
				}
			}
		catch(Exception e) {
			System.out.print("DeletePurchaseSlip, Error : " + e.getMessage());
			return false;
		}
	}
	public boolean UpdateInventoryPurchaseSlip(ListOfReceivingStores ListOfReceivingStores,List<DetailPurchaseSlip> DetailPurchaseSlips) {
		Stack<InventoryShop> InventoryShops = new Stack<>();
		try {
			Set<Boolean> statusCreate = new HashSet<>();
				if(!ListOfReceivingStores.isStatus()) {
					for(DetailPurchaseSlip DetailPurchaseSlip : DetailPurchaseSlips) {
						InventoryShops.push(InventoryShopReponsitory.SelectInventoryShop(ListOfReceivingStores.getIdShop(),DetailPurchaseSlip.getIdDetail()));
						statusCreate.add(InventoryShopReponsitory.UpdateInventoryShop(InventoryShops.peek().getQuantity() + DetailPurchaseSlip.getQuantity(),ListOfReceivingStores.getIdShop(),DetailPurchaseSlip.getIdDetail()) > 0);
						if(statusCreate.contains(false)) break;
					}
					if(statusCreate.contains(false)) {
						for(InventoryShop InventoryShop : InventoryShops) {
							InventoryShopReponsitory.save(InventoryShop);
						}
						return false;
					}
					else {
						// thay đổi trạng thái phiếu
						ListOfReceivingStores.setStatus(true);
						return ListOfReceivingStoresService.UpdateListOfReceivingStores(ListOfReceivingStores);
					}
				}
				else return false;
			}
		catch(Exception e) {
			System.out.print("UpdateInventoryRefundSlip, Error : " + e.getMessage());
			for(InventoryShop InventoryShop : InventoryShops) {
				InventoryShopReponsitory.save(InventoryShop);
			}
			return false;
		}
	}
}
