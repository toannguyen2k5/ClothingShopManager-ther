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
	@Autowired
	private InventoryShopService InventoryShopService;
	public Map<Integer,String> ReturnDictionary(List<String> lists){
		Map<Integer,String> Dictionary = new HashMap<>();
		int index =0;
		for(String value : lists) {
			if(!Dictionary.containsValue(value)) Dictionary.put(index++,value);
		}
		return Dictionary;
	}
	// tìm kiếm mã detai
	@Transactional(readOnly = true)
	public String SelectIdDetailProduct (String idProduct, String idColor , String idSize) {
		try {
			return detailProductRepository.SelectIdDetailProduct(idProduct, idColor, idSize);
		}
		catch(Exception e) {
			System.out.println("SelectDetail, Error : " + e.getMessage());
			return "";
		}
	}
	@Transactional(readOnly = true)
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
	@Transactional(readOnly = true)
	public List<InventoryDTO> GetInventoryDTO(String idDetail){
		List<InventoryDTO> shops = InventoryShopService.mapToInventoryDTO(InventoryShopReponsitory.SelecShopByIdDetail(idDetail));
		return shops;
	}
	// tìm kiếm danh sách DetailProductDTO dựa trên mã sản phẩm
	@Transactional(readOnly = true)
	public DetailProductDTO SelectDetail(String idProduct) {
		try {
			// lấy thông tin cơ bản
			DetailProductDTO result = productRepository.selectDetailProduct(idProduct);
			result.setImages(productRepository.SelectPathsByIdProduct(idProduct));
			// lấy kích thước , màu sắc , số lượng
			List<ColorSizeDTO> ColorSizeDTOs = productRepository.SelectColorSizeByIdProduct(idProduct);
			int i = 0;
			while (i < ColorSizeDTOs.size()) {              // ✅ dùng 
			    for (int j = i + 1; j < ColorSizeDTOs.size(); j++) {   // ✅ dùng 
			        if (ColorSizeDTOs.get(i).compare(ColorSizeDTOs.get(j))) {
			            ColorSizeDTOs.get(i).setQuantity(
			                ColorSizeDTOs.get(i).getQuantity() + ColorSizeDTOs.get(j).getQuantity()
			            );
			            ColorSizeDTOs.remove(j);
			            j--;
			        }
			    }
			    i++;
			}
			result.setColorSize(ColorSizeDTOs);
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
	@Transactional
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
