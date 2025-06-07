package com.example.ClothingStoreManagementAPI.service;
import org.springframework.stereotype.Service;
import com.example.ClothingStoreManagementAPI.model.Entity.DiscountEvent;
import com.example.ClothingStoreManagementAPI.model.Entity.InventoryShop;
import com.example.ClothingStoreManagementAPI.model.Entity.Shop;
import com.example.ClothingStoreManagementAPI.model.Entity.Size;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.repository.*;
import com.example.ClothingStoreManagementAPI.model.DTO.*;
import com.example.ClothingStoreManagementAPI.model.Entity.Color;
import com.example.ClothingStoreManagementAPI.model.Entity.DetailProduct;
import java.util.*;
@Service
public class DetailProductService {
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private DetailProductRepository detailProductRepository;
	@Autowired
	private SizeRepository SizeRepository;
	@Autowired
	private ColorRepository ColorRepository;
	@Autowired
	private InventoryShopReponsitory InventoryShopReponsitory;
	@Autowired
	private Common common;
	@Autowired
	private DiscountEventService DiscountEventService;
	public Map<Integer,String> ReturnDictionary(List<String> lists){
		Map<Integer,String> Dictionary = new HashMap<>();
		int index =0;
		for(String value : lists) {
			if(!Dictionary.containsValue(value)) Dictionary.put(index++,value);
		}
		return Dictionary;
	}
	// tìm kiếm mã detai
	public String SelectIdDetailProduct (String idProduct, String idColor , String idSize) {
		try {
			return detailProductRepository.SelectIdDetailProduct(idProduct, idColor, idSize);
		}
		catch(Exception e) {
			System.out.println("SelectDetail, Error : " + e.getMessage());
			return "";
		}
	}
	public List<DetailProductv2DTO> GetDetailProductv2DTO(String GetDetaiById){
		List<DetailProductv2DTO> result = new ArrayList<>();
		List<DetailProduct> DetailProducts = detailProductRepository.GetDetaiById(GetDetaiById);
		for(DetailProduct DetailProduct :DetailProducts) {
			Optional<Size> Size = SizeRepository.findById(DetailProduct.getIdSize());
			Optional<Color> Color = ColorRepository.findById(DetailProduct.getIdColor());
			result.add(new DetailProductv2DTO (DetailProduct.getIdDetail(),DetailProduct.getNumberSeri(),Size.get().getNameSize(),DetailProduct.getDayImport(),DetailProduct.isStatus(),
					DetailProduct.isSellStatus(),Color.get().getNameColor(),InventoryShopReponsitory.SelectInventoryShop(DetailProduct.getIdDetail())));
		}
		return result;
	}
	public List<InventoryDTO> GetInventoryDTO(String idDetail){
		List<InventoryDTO> result = new ArrayList<>();
		List<Shop> shops = InventoryShopReponsitory.SelecShopByIdDetail(idDetail);
		for(Shop shop : shops) {
			InventoryShop InventoryShop = InventoryShopReponsitory.SelectInventoryShop(shop.getIdShop(),idDetail);
			result.add(new InventoryDTO(shop.getIdShop(), shop.getNameShop(),InventoryShop.getQuantity()));
		}
		return result;
	}
	// tìm kiếm danh sách DetailProductDTO dựa trên mã sản phẩm
	public DetailProductDTO SelectDetail(String idProduct) {
		try {
			DetailProductDTO result = productRepository.selectDetailProduct(idProduct);
			result.setImages(productRepository.SelectPathsByIdProduct(idProduct));
			result.setColorSize(productRepository.SelectColorSizeByIdProduct(idProduct));
			List<DiscountEvent> DiscountEvent = DiscountEventService.SellectDiscountEvent(idProduct, 1, 0);
			if(DiscountEvent != null && DiscountEvent.size() >0) result.setDiscountEvent(DiscountEvent.get(0));
			return result;
		}
		catch(Exception e) {
			System.out.println("SelectDetail, Error : " + e.getMessage());
			return null;
		}
	}
	// thêm chi tiết hoặc cập nhật sản phẩm 
	public String InsertDetailProduct(DetailProduct DetailProduct) {
		try {
			String idcurrent = detailProductRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(DetailProduct.class);
			DetailProduct.setIdDetail(newId);
			detailProductRepository.save(DetailProduct); // thêm brand vào csdl
			detailProductRepository.flush();
			return detailProductRepository.existsById(newId) ? newId:""; // trạng thái tồn tại của object mới
		}
		catch(Exception e) {
			System.out.print("InsertDetailProduct, Error : " + e.getMessage());
			return "";
		}
	}
	@Transactional
	public boolean UpdateDetailProduct(DetailProduct DetailProduct) {
		try {
			return detailProductRepository.UpdateDetailProduct(DetailProduct.getIdDetail(), DetailProduct.getNumberSeri(), DetailProduct.getIdSize()
					, DetailProduct.getDayImport(), DetailProduct.isStatus(), DetailProduct.getIdProduct(), DetailProduct.isSellStatus(), DetailProduct.getIdColor()) > 0;
		}
		catch(Exception e) {
			System.out.print("UpdateDetailProduct, Error : " + e.getMessage());
			return false;
		}
	}
}
