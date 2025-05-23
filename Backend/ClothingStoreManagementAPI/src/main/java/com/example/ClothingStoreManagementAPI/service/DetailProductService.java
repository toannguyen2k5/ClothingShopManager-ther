package com.example.ClothingStoreManagementAPI.service;
import org.springframework.stereotype.Service;
import com.example.ClothingStoreManagementAPI.model.Entity.DiscountEvent;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.repository.*;
import com.example.ClothingStoreManagementAPI.model.DTO.*;
import com.example.ClothingStoreManagementAPI.model.Entity.DetailProduct;
import java.util.*;
@Service
public class DetailProductService {
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private DetailProductRepository detailProductRepository;
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
	// tìm kiếm DetailProductDTO dựa trên mã sản phẩm
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
	public boolean InsertDetailProduct(DetailProduct DetailProduct) {
		try {
			String idcurrent = detailProductRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(DetailProduct.class);
			DetailProduct.setIdDetail(newId);
			detailProductRepository.save(DetailProduct); // thêm brand vào csdl
			detailProductRepository.flush();
			return detailProductRepository.existsById(newId); // trạng thái tồn tại của object mới
		}
		catch(Exception e) {
			System.out.print("InsertDetailProduct, Error : " + e.getMessage());
			return false;
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
