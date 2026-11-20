package com.example.ClothingStoreManagementAPI.product.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.product.repository.ProductImageRepository;
import com.example.ClothingStoreManagementAPI.product.model.Entity.ProductImage;
import java.util.*;
@Service
public class ProductImageService {
	@Autowired
	private ProductImageRepository ProductImageRepository;
	@Autowired
	private Common common;
	@Transactional(readOnly = true)
	public List<ProductImage> SellectProductImageByIdProduct(String idProduct) {
		try {
			return ProductImageRepository.SellectProductImageByIdProduct(idProduct);
		}
		catch(Exception e) {
			System.out.print("SellectProductImageByIdProduct, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional
	public boolean InsertProductImage(ProductImage ProductImage){
		try {
			String idcurrent = ProductImageRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(ProductImage.class);
			ProductImage.setIdImage(newId);
			ProductImageRepository.save(ProductImage); // thêm brand vào csdl
			ProductImageRepository.flush();
			return ProductImageRepository.existsById(newId); // trạng thái tồn tại của object mới
		}
		catch(Exception e) {
			System.out.print("InsertProductImage, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteProductImage(String idImage) {
		try {
			ProductImageRepository.deleteById(idImage);
			return !ProductImageRepository.existsById(idImage);
		}
		catch(Exception e) {
			System.out.print("DeleteProductImage, Error : " + e.getMessage());
			return false;
		}
	}
}
