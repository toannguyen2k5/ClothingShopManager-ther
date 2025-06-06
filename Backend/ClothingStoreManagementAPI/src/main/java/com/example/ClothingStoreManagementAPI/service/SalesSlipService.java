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
import java.time.LocalDate ;
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
	public List<SalesSlipDTO> SellectAll(int offset, int limit){
		try{
			List<SalesSlipDTO> result = new ArrayList<>();
			Query query = entityManager.createQuery("SELECT c FROM SalesSlip c", SalesSlip.class);
            if (offset > 0)
				query.setFirstResult(offset); // OFFSET
			if (limit > 0)
				query.setMaxResults(limit); // LIMIT
            List<SalesSlip> SalesSlips = query.getResultList();
            for(SalesSlip SalesSlip : SalesSlips) {
            	result.add(new SalesSlipDTO(SalesSlip.getIdSalesSlip(),UserRepository.SellectFullName(SalesSlip.getIdCreater()),UserRepository.SellectFullName(SalesSlip.getIdClient()),
            			SalesSlip.getCreateDate(),SalesSlip.getDeliveryAddress(),SalesSlip.getShippingFee(),SalesSlip.getTotalBill(),SalesSlip.isDeliveryStatus()));
            }
            return result;
		}
		catch(Exception e) {
			System.out.print("SelectPurchaseSlip all, Error : " + e.getMessage());
			return null;
		}
	}
	public List<SalesSlipDTO> GetSalesSlipByIdCLient(String idClient){
		try{
			List<SalesSlipDTO> result = new ArrayList<>();
			Query query = entityManager.createQuery("SELECT c FROM SalesSlip c", SalesSlip.class);
			List<SalesSlip> SalesSlips = query.getResultList();
            for(SalesSlip SalesSlip : SalesSlips) {
            	if(SalesSlip.getIdClient().equals(idClient))result.add(new SalesSlipDTO(SalesSlip.getIdSalesSlip(),UserRepository.SellectFullName(SalesSlip.getIdCreater()),UserRepository.SellectFullName(SalesSlip.getIdClient()),
            			SalesSlip.getCreateDate(),SalesSlip.getDeliveryAddress(),SalesSlip.getShippingFee(),SalesSlip.getTotalBill(),SalesSlip.isDeliveryStatus()));
            }
            return result;
		}
		catch(Exception e) {
			System.out.print("SelectMaxId, Error : " + e.getMessage());
			return null;
		}
	}
	public String SelectMaxId() {
		try{
			return SalesSlipRepository.SelectMaxId();
		}
		catch(Exception e) {
			System.out.print("SelectMaxId, Error : " + e.getMessage());
			return null;
		}
	}
	public List<ShowAllRateDTO> ShowAllRate(){
		try{
			List<ShowAllRateDTO> result = new ArrayList<>();
			List<SalesSlip> SalesSlips = SalesSlipRepository.findAll();
			for(SalesSlip salesSlip : SalesSlips) {
				if(salesSlip.isDeliveryStatus())
				result.add(new ShowAllRateDTO(salesSlip.getIdSalesSlip(),UserRepository.SellectFullName(salesSlip.getIdClient()),salesSlip.getCreateDate(),salesSlip.getDeliveryAddress(),
						salesSlip.getEvaluate(),salesSlip.getComment()));
			}
			return result;
		}
		catch(Exception e) {
			System.out.print("ShowAllRate, Error : " + e.getMessage());
			return null;
		}
	}
	public List<DetailPurchaseSlipDTO> SellectDetailSalesSlip(String idSalesSlip) {
		try{
			List<DetailPurchaseSlipDTO> result = new ArrayList<>();
			List<ListOfDeliveryStores> ListOfReceivingStoress = ListOfDeliveryStoresService.SellectListOfDeliveryStores(idSalesSlip);
			for(ListOfDeliveryStores ListOfDeliveryStores : ListOfReceivingStoress) {
				List<DetailSalesSlip> DetailSalesSlips = DetailSalesSlipService.SellectDetailSalesSlip(ListOfDeliveryStores.getIdList());
				for(DetailSalesSlip DetailSalesSlip : DetailSalesSlips) {
					ReverseRetrievalDProductDTO ReverseRetrievalDProductDTO = DetailProductRepository.ReverseRetrievalDProduct(DetailSalesSlip.getIdDetailProduct());
					result.add(new DetailPurchaseSlipDTO(ListOfDeliveryStores.getIdShop(),DetailProductRepository.SelectIdDetailByIdPro(DetailSalesSlip.getIdDetailProduct()),ReverseRetrievalDProductDTO.getNameProduct(),DetailSalesSlip.getPrice(),
							DetailSalesSlip.getQuantity(),ReverseRetrievalDProductDTO.getNameColor(),ReverseRetrievalDProductDTO.getNameSize()));
				}
			}
			return result;
		}
		catch(Exception e) {
			System.out.print("SellectDetailSalesSlip, Error : " + e.getMessage());
			return null;
		}
	}
	// check thông tin sản phẩm hợp lệ
	public String checkinforvalid(CheckInforValidData CheckInforValidData){
		try {
			String CheckIdDetail = DetailProductService.SelectIdDetailProduct(CheckInforValidData.getIdProduct(), CheckInforValidData.getIdColor(), CheckInforValidData.getIdSize());
			if(CheckIdDetail !=""){
				InventoryShop InventoryShop = InventoryShopReponsitory.SelectInventoryShop(CheckInforValidData.getIdShop(), CheckIdDetail);
				if(InventoryShop != null && InventoryShop.getQuantity() >= CheckInforValidData.getQuantity()) {
					return 	CheckIdDetail;
				}
				else return "";
			}
			else return "";
		}
		catch(Exception e) {
			return "";
		}
	}
	// tạo phiếu
	public boolean InsertSalesSlip(SalesSlipData salesSlipData, List<ShopDeliveryData> shopDeliveryDatas){
		String newIdSalesSlip = "";
		Stack<String> idListShops = new Stack<String>();
		try {
			// thêm thông tin phiếu giao hàng
			String idcurrent = SalesSlipRepository.SelectMaxId();
			newIdSalesSlip = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(SalesSlip.class);
			SalesSlipRepository.save(new SalesSlip (newIdSalesSlip,salesSlipData.getIdCreater(),salesSlipData.getIdClient(),
					salesSlipData.getCreateDate(),salesSlipData.getDeliveryAddress(),salesSlipData.getTotalBill(),salesSlipData.getShippingFee(),false,salesSlipData.getNote(),
					null,null,null,salesSlipData.getDiscountcode(),null,null)); // thêm brand vào csdl
			SalesSlipRepository.flush();
			Set<Boolean> statusCreate = new HashSet<>();
			statusCreate.add(SalesSlipRepository.existsById(newIdSalesSlip));
			if(!statusCreate.contains(false)){
				// tạo phiếu thành công
				for(ShopDeliveryData ShopDeliveryData : shopDeliveryDatas) {
					String newidList = ListOfDeliveryStoresService.InsertListOfDeliveryStores(new ListOfDeliveryStores(null,newIdSalesSlip,ShopDeliveryData.getIdShop(),false));
					statusCreate.add(!newidList.equals(""));
					if(!statusCreate.contains(false)) {
						idListShops.push(newidList);
						for(CartData ShoppingCartData : ShopDeliveryData.getShoppingCartData()) {
							statusCreate.add(DetailSalesSlipService.InsertDetailSalesSlip(new DetailSalesSlip(null,idListShops.peek(),ShoppingCartData.getIdDetail(),
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
					SalesSlipRepository.deleteById(newIdSalesSlip); // xóa phiếu nếu có lỗi
					for(String idListShop : idListShops) {
						ListOfDeliveryStoresService.DeleteListOfDeliveryStores(idListShop); // xóa list
						DetailSalesSlipService.DeleteDetailSalesSlipByIdList(idListShop);
					}
				}
				return false;
			}
			else {
				for(ShopDeliveryData ShopDeliveryData : shopDeliveryDatas) {
					for(CartData ShoppingCartData : ShopDeliveryData.getShoppingCartData()) {
						ShoppingCart shoppingCart= shoppingCartRepository.SelectShoppingCart(ShoppingCartData.getIdDetail(), salesSlipData.getIdClient());
						if(shoppingCart!=null)shoppingCartRepository.deleteById(shoppingCart.getIdShoppingCart());
					}
				}
				return true;
			}
		}
		catch(Exception e) {
			SalesSlipRepository.deleteById(newIdSalesSlip); // xóa phiếu nếu có lỗi
			for(String idListShop : idListShops) {
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
				if(!SalesSlip.isDeliveryStatus()) {
					return SalesSlipRepository.UpdateSalesSlip(SalesSlip.getIdSalesSlip(), SalesSlip.getIdCreater(), SalesSlip.getIdClient(), SalesSlip.getCreateDate(),
							SalesSlip.getDeliveryAddress(), SalesSlip.getTotalBill(),SalesSlip.getShippingFee(), SalesSlip.isDeliveryStatus(), SalesSlip.getNote(), SalesSlip.getEvaluate(),SalesSlip.getRefundStatus(), SalesSlip.getProof(),
							SalesSlip.getDiscountCode(), SalesSlip.getDeliveryDate(),SalesSlip.getComment()) > 0;
				}
				else return false;
			}
		catch(Exception e) {
			System.out.print("UpdateSalesSlip, Error : " + e.getMessage());
			return false;
		}
	}
	// cập nhật thông tin danh sách shop của đơn hàng
	@Transactional
	public boolean UpdateSalesSlip(SalesSlip SalesSlip,List<ShopDeliveryData> ShopDeliveryDatas) {
		try {
			if(!SalesSlip.isDeliveryStatus()) {
				// xóa danh sách kho các kiểu
				List<ListOfDeliveryStores> ListOfDeliveryStores = ListOfDeliveryStoresService.SellectListOfDeliveryStores(SalesSlip.getIdSalesSlip());
				for(ListOfDeliveryStores ListOfDeliveryStore : ListOfDeliveryStores) {
					DetailSalesSlipService.DeleteDetailSalesSlipByIdList(ListOfDeliveryStore.getIdList());
				}
				ListOfDeliveryStoresService.DeleteListOfDeliveryStoresByidSalesSlip(SalesSlip.getIdSalesSlip());
				
				// thêm danh sách phiếu lại khi thay đổi
				Set<Boolean> statusCreate = new HashSet<>();
				Stack<String> idListShops = new Stack<String>();
				if(!statusCreate.contains(false)){
					// tạo phiếu thành công
					for(ShopDeliveryData ShopDeliveryData : ShopDeliveryDatas ) {
						String newidList = ListOfDeliveryStoresService.InsertListOfDeliveryStores(new ListOfDeliveryStores(null,SalesSlip.getIdSalesSlip(),ShopDeliveryData.getIdShop(),false));
						statusCreate.add(!newidList.equals(""));
						if(!statusCreate.contains(false)) {
							idListShops.push(newidList);
							for(CartData ShoppingCartData : ShopDeliveryData.getShoppingCartData()) {
								statusCreate.add(DetailSalesSlipService.InsertDetailSalesSlip(new DetailSalesSlip(null,idListShops.peek(),ShoppingCartData.getIdDetail(),
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
						SalesSlipRepository.deleteById(SalesSlip.getIdSalesSlip()); // xóa phiếu nếu có lỗi
						for(String idListShop : idListShops) {
							ListOfDeliveryStoresService.DeleteListOfDeliveryStores(idListShop); // xóa list
							DetailSalesSlipService.DeleteDetailSalesSlipByIdList(idListShop);
						}
					}
					return false;
				}
				else return UpdateSalesSlip(SalesSlip) && true;
			}
			else return false;
		}
		catch(Exception e) {
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
			if(!salesSlip.isPresent()) {
				throw new RuntimeException("Không tìm thấy hóa đơn với ID: " + idSalesSlip);
			}
			else {
				if(!salesSlip.get().isDeliveryStatus()) {
					List<ListOfDeliveryStores> ListOfDeliveryStores = ListOfDeliveryStoresService.SellectListOfDeliveryStores(idSalesSlip);
					for(ListOfDeliveryStores ListOfDeliveryStore : ListOfDeliveryStores) {
						DetailSalesSlipService.DeleteDetailSalesSlipByIdList(ListOfDeliveryStore.getIdList());
					}
					ListOfDeliveryStoresService.DeleteListOfDeliveryStoresByidSalesSlip(idSalesSlip);
					SalesSlipRepository.deleteById(idSalesSlip);
					return !SalesSlipRepository.existsById(idSalesSlip);
				}
				else return false;
				}
			}
		catch(Exception e) {
			System.out.print("DeleteSalesSlip, Error : " + e.getMessage());
			return false;
		}
	}
	private double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
		System.out.println(Math.abs(lat2 - lat1));
        if(Math.abs(lat2 - lat1) < 1) {
        	double deltaLat = Math.abs(lon2 - lon1);
            double northSouthDistance = deltaLat * 111.32;  // km
            return northSouthDistance;
        }
        else {
        	double lat1Rad = Math.toRadians(lat1);
            double lon1Rad = Math.toRadians(lon1);
            double lat2Rad = Math.toRadians(lat2);
            double lon2Rad = Math.toRadians(lon2);

            double dLat = lat2Rad - lat1Rad;
            double dLon = lon2Rad - lon1Rad;
            double a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                     + Math.cos(lat1Rad) * Math.cos(lat2Rad)
                     * Math.sin(dLon / 2) * Math.sin(dLon / 2);

            double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return 6371 * c;
        }
    }
    public Long ShippingFee(String addressReceive , List<String> idShops) {
    	double Distance = 0;
    	String[] Strings = addressReceive.split(",");
    	District DistrictReceive = DistrictRepository.findDistrictByNameAndProvince(Strings[Strings.length-2].trim(), Strings[Strings.length-1].trim());
		Map<String,District> NameProvinceAndDistrict = new HashMap<>();
		List<District> Districts = new ArrayList<>();
    	for(String idShop : idShops) {
    		String[] addressShop = ShopRepository.findById(idShop).get().getAddress().split(",");
    		District DistrictShop = DistrictRepository.findDistrictByNameAndProvince(addressShop[addressShop.length-2].trim(), addressShop[addressShop.length-1].trim());
    		Districts.add(DistrictShop);
    		if(NameProvinceAndDistrict.containsKey(addressShop[addressShop.length-1].trim())) {
    			// kiểm tra xem cái nào gần hơn
    			if(calculateDistance(DistrictReceive.getLatitude(),DistrictReceive.getLongitude(),DistrictShop.getLatitude(),DistrictShop.getLongitude()) <
    					calculateDistance(DistrictReceive.getLatitude(),DistrictReceive.getLongitude(),NameProvinceAndDistrict.get(addressShop[addressShop.length-1].trim()).getLatitude(),
    							NameProvinceAndDistrict.get(addressShop[addressShop.length-1].trim()).getLongitude())) {
    				NameProvinceAndDistrict.put(addressShop[addressShop.length-1].trim(), DistrictShop);
    			}
    		}
    		else NameProvinceAndDistrict.put(addressShop[addressShop.length-1].trim(), DistrictShop);
    	}
    	for(District District : Districts) {
    		String NameProvince = ProvinceRepository.SellectNameProvince(District.getIdProvince());
    		Distance += calculateDistance(District.getLatitude(),District.getLongitude(),NameProvinceAndDistrict.get(NameProvince).getLatitude(),
    				NameProvinceAndDistrict.get(NameProvince).getLongitude());
    	}
    	for(Map.Entry<String,District> entry : NameProvinceAndDistrict.entrySet()) {
    		double a = calculateDistance(DistrictReceive.getLatitude(),DistrictReceive.getLongitude(),entry.getValue().getLatitude(),
    				entry.getValue().getLongitude());
    		System.out.println(entry.getKey() + " : " + a);
    		Distance += a;
    	}
    	if(Distance>= 0 && Distance <= 100 ) return  Math.round(Distance*150 + 10000);
    	else if(Distance> 100 && Distance <= 500 ) return  Math.round(Distance*120 + 10000);
    	else return  Math.round(Distance*90 + 10000);
    	
    }
    // xem tất cả chi tiết phiếu hoàn trả
    public List<DetailedRefundSlip> ShowDetailedRefundSlips (String idSalesSlip) {
		try {
			return DetailedRefundSlipReponsitory.ShowDetailedRefundSlips(idSalesSlip);
		}
		catch(Exception e) {
			System.out.print("ShowDetailedRefundSlips, Error : " + e.getMessage());
			return null;
		}
	}
    // thêm chi tiết phiếu hoàn
	public boolean AddDetailedRefundSlips (List<DetailedRefundSlip> DetailedRefundSlips) {
		try {
			Set<Boolean> statusCreate = new HashSet<>();
			for(DetailedRefundSlip DetailedRefundSlip : DetailedRefundSlips) {
				String idcurrent = DetailedRefundSlipReponsitory.SelectMaxId();
				String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(DetailedRefundSlip.class);
				DetailedRefundSlip.setIdDetailedRefundSlip(newId);
				DetailedRefundSlipReponsitory.save(DetailedRefundSlip); // thêm brand vào csdl
				DetailedRefundSlipReponsitory.flush();
				statusCreate.add(DetailedRefundSlipReponsitory.existsById(newId)); // trạng thái tồn tại của object mới
			}
			if(statusCreate.contains(false)) {
				DeleteDetailedRefundSlips(DetailedRefundSlips.get(0).getIdSalesSlip());
			}
			return !statusCreate.contains(false);
		}
		catch(Exception e) {
			System.out.print("AddDetailedRefundSlips, Error : " + e.getMessage());
			DeleteDetailedRefundSlips(DetailedRefundSlips.get(0).getIdSalesSlip());
			return false;
		}
	}
	// xóa hết chi tiết phiếu
	@Transactional
	public boolean DeleteDetailedRefundSlips (String idSalesSlip) {
		try {
			return DetailedRefundSlipReponsitory.DeleteDetailedRefundSlips(idSalesSlip) >0;
		}
		catch(Exception e) {
			System.out.print("DeleteDetailedRefundSlips, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteDetailedRefundSlip (String idDetailedRefundSlip) {
		try {
			DetailedRefundSlipReponsitory.deleteById(idDetailedRefundSlip);
			return !DetailedRefundSlipReponsitory.existsById(idDetailedRefundSlip);
		}
		catch(Exception e) {
			System.out.print("DeleteDetailedRefundSlip, Error : " + e.getMessage());
			return false;
		}
	}
	// cập nhật phiếu
	@Transactional
	public boolean UpdateDetailedRefundSlip (DetailedRefundSlip DetailedRefundSlip ) {
		try {
			return DetailedRefundSlipReponsitory.UpdateDetailedRefundSlip(DetailedRefundSlip.getIdDetailedRefundSlip(), DetailedRefundSlip.getIdDetail(),
					DetailedRefundSlip.getIdDetail(), DetailedRefundSlip.getIdDetail(), DetailedRefundSlip.getIdDetail()) > 0;
		}
		catch(Exception e) {
			System.out.print("UpdateDetailedRefundSlip, Error : " + e.getMessage());
			return false;
		}
	}
	// cập nhật số lượng hàng tồn phiếu bán
	@Transactional
	public boolean UpdateInventorySalesSlip (SalesSlip SalesSlip, Map<String,List<CartData>> ShoppingCartDatas) {
		Stack<InventoryShop> InventoryShops = new Stack<>();
		try {
			if(!SalesSlip.isDeliveryStatus()) {
				Set<Boolean> statusCreate = new HashSet<>();
				for(Map.Entry<String,List<CartData>> entry : ShoppingCartDatas.entrySet()) {
					for(CartData ShoppingCartData : entry.getValue()) {
						InventoryShops.push(InventoryShopReponsitory.SelectInventoryShop(entry.getKey(),ShoppingCartData.getIdDetail()));
						statusCreate.add(InventoryShopReponsitory.UpdateInventoryShop(InventoryShops.peek().getQuantity() - ShoppingCartData.getQuantity(),entry.getKey(),ShoppingCartData.getIdDetail()) > 0);
						if(statusCreate.contains(false)) break;
					}
					if(statusCreate.contains(false)) break;
				}
				if(statusCreate.contains(false)) {
					for(InventoryShop InventoryShop : InventoryShops) {
						InventoryShopReponsitory.save(InventoryShop);
					}
					return false;
				}
				else {
					SalesSlip.setDeliveryStatus(true);
					return UpdateSalesSlip(SalesSlip);
				}
			}
			else return false;
		}
		catch(Exception e) {
			System.out.print("UpdateInventorySalesSlip, Error : " + e.getMessage());
			for(InventoryShop InventoryShop : InventoryShops) {
				InventoryShopReponsitory.save(InventoryShop);
			}
			return false;
		}
	}
	// cập nhật số lượng hàng tồn phiếu hoàn trả
	@Transactional
	public boolean UpdateInventoryRefundSlip (SalesSlip SalesSlip ,List<DetailedRefundSlip> DetailedRefundSlips) {
		Stack<InventoryShop> InventoryShops = new Stack<>();
		try {
				Set<Boolean> statusCreate = new HashSet<>();
				if(!SalesSlip.getRefundStatus()) {
					for(DetailedRefundSlip DetailedRefundSlip : DetailedRefundSlips) {
						String idShop = DetailedRefundSlipReponsitory.FindShopDeliverys(DetailedRefundSlip.getIdSalesSlip(),DetailedRefundSlip.getIdDetail()).get(0);
						InventoryShops.push(InventoryShopReponsitory.SelectInventoryShop(idShop,DetailedRefundSlip.getIdDetail()));
						statusCreate.add(InventoryShopReponsitory.UpdateInventoryShop(InventoryShops.peek().getQuantity() + DetailedRefundSlip.getQuantity(),idShop,DetailedRefundSlip.getIdDetail()) > 0);
						if(statusCreate.contains(false)) break;
					}
					if(statusCreate.contains(false)) {
						for(InventoryShop InventoryShop : InventoryShops) {
							InventoryShopReponsitory.save(InventoryShop);
						}
						return false;
					}
					else {
						SalesSlip.setRefundStatus(true);
						return UpdateSalesSlip(SalesSlip);
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
	public List<Shop> GetShopByInventory(List<String> idDetailProducts){
		List<Shop> result = new ArrayList<>();
		for(String idDetailProduct : idDetailProducts ) {
			List<Shop> GetShopData = InventoryShopReponsitory.SelecShopByIdDetail(idDetailProduct);
			for(Shop shop : GetShopData) if(!result.contains(shop))result.add(shop);
		}
		return result;
	}
}	
