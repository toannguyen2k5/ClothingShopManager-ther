package com.example.ClothingStoreManagementAPI.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.example.ClothingStoreManagementAPI.repository.*;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import com.example.ClothingStoreManagementAPI.model.DTO.*;
import com.example.ClothingStoreManagementAPI.model.Entity.*;

import java.util.*;
@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private BrandRepository BrandRepository;
	@Autowired
	private ProductCategoryRepository ProductCategoryRepository;
	@Autowired
	private StyleRepository StyleRepository;
	@Autowired
	private ProductMaterialRepository ProductMaterialRepository;
	@Autowired
	private Common common;
	@Autowired
	private EntityManager entityManager;
	@Autowired
	private ImageService ImageService;
	public List<ProductDTO> SellectAll(int limit , int offset){
		try {
			Query query = entityManager.createQuery(
				    "SELECT new com.example.ClothingStoreManagementAPI.model.DTO.ShowProductDTO(" +
				    "p.idProduct, p.nameProduct, b.nameBrand, pc.nameCategory, sup.nameSupplier, " +
				    "s.nameStyle, pm.nameMaterial, pe.price, d.decrease, pi.path, p.status, SUM(is.quantity)) "+
				    "FROM Product p " +
				    "INNER JOIN Brand b ON p.idBrand = b.idBrand " +
				    "INNER JOIN Supplier sup ON sup.idSupplier = p.idSupplier " +
				    "INNER JOIN ProductCategory pc ON pc.idCategory = p.idCategory " +
				    "INNER JOIN Style s ON s.idStyle = p.idStyle " +
				    "INNER JOIN ProductMaterial pm ON pm.idMaterial = p.idMaterial " +
				    "LEFT JOIN DetailProduct dp ON dp.idProduct = p.idProduct " +
				    "LEFT JOIN InventoryShop is ON is.idDetail = dp.idDetail " +
				    "LEFT JOIN Price pe ON pe.idProduct = p.idProduct AND pe.status = true " +
				    "LEFT JOIN DiscountEvent d ON d.idProduct = p.idProduct " +
				    "LEFT JOIN ProductImage pi ON pi.idProduct = p.idProduct AND pi.isMain = true " +
				    "WHERE p.status = true " +
				    "GROUP BY p.idProduct, p.nameProduct, b.nameBrand, pc.nameCategory, sup.nameSupplier, " +
				    "s.nameStyle, pm.nameMaterial, pe.price, d.decrease, pi.path, p.status",
				    ShowProductDTO.class
				);
			if (offset > 0) {
                query.setFirstResult(offset);
                }
            if (limit > 0) {
                query.setMaxResults(limit);
                }
			return query.getResultList();
		}
		catch(Exception e) {
			System.out.print("SellectProduct, Error : " + e.getMessage());
			return null;
		}
	}
	public List<ProductDTO> SellectInfor(String select,int limit , int offset){
		try {
			Query query = entityManager.createQuery("SELECT new com.example.ClothingStoreManagementAPI.model.DTO.ProductDTO(p.idProduct, p.nameProduct, pe.price, d.decrease, pi.path, p.status) " +
				       "FROM Product p " +
				       "INNER JOIN Price pe ON pe.idProduct = p.idProduct " +
				       "LEFT JOIN DiscountEvent d ON d.idProduct = p.idProduct " +
				       "INNER JOIN ProductImage pi ON pi.idProduct = p.idProduct AND pi.isMain = TRUE " +
				       "WHERE p.idProduct LIKE CONCAT('%', :query, '%') " +
				       "OR p.nameProduct LIKE CONCAT('%', :query, '%') " +
				       "OR p.description LIKE CONCAT('%', :query, '%')",
				    ProductDTO.class
				);
			query.setParameter("query", select);
			if (offset > 0) {
                query.setFirstResult(offset);
                }
            if (limit > 0) {
                query.setMaxResults(limit);
                }
			return query.getResultList();
		}
		catch(Exception e) {
			System.out.print("SellectInforProduct, Error : " + e.getMessage());
			return null;
		}
	}
	public List<ProductDTO> SellectByCategory(String select,int limit , int offset){
		try {
			Query query = entityManager.createQuery("SELECT new com.example.ClothingStoreManagementAPI.model.DTO.ProductDTO(p.idProduct, p.nameProduct, pe.price, d.decrease, pi.path, p.status) " +
				       "FROM Product p " +
				       "LEFT JOIN Price pe ON pe.idProduct = p.idProduct " +
				       "LEFT JOIN DiscountEvent d ON d.idProduct = p.idProduct " +
				       "LEFT JOIN ProductImage pi ON pi.idProduct = p.idProduct AND pi.isMain = TRUE " +
					    "LEFT JOIN ProductCategory pc ON pc.idCategory = p.idCategory "+
				       "WHERE p.idCategory =:query",
				    ProductDTO.class
				);
			query.setParameter("query", select);
			if (offset > 0) {
                query.setFirstResult(offset);
                }
            if (limit > 0) {
                query.setMaxResults(limit);
                }
			return query.getResultList();
		}
		catch(Exception e) {
			System.out.print("SellectInforProduct, Error : " + e.getMessage());
			return null;
		}
	}
	public String InserProduct (Product Product, MultipartFile mainImage, List<MultipartFile> subImages) {
		try {
			String idcurrent = productRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(Product.class);
			Product.setIdProduct(newId);
			productRepository.save(Product); // thêm brand vào csdl
			productRepository.flush();
			if(mainImage!=null && !mainImage.isEmpty())ImageService.InserImage("upload/product/",Collections.singletonList(mainImage), newId, "product",true);
			if(subImages!=null && !subImages.isEmpty())ImageService.InserImage("upload/product/", subImages, newId, "product",false);
			return productRepository.existsById(newId)?newId:""; // trạng thái tồn tại của object mới
		}
		catch(Exception e) {
			System.out.print("InserProduct, Error : " + e.getMessage());
			return "";
		}
	}
	public boolean InserProduct (Product Product) {
		try {
			String idcurrent = productRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(Product.class);
			Product.setIdProduct(newId);
			productRepository.save(Product); // thêm brand vào csdl
			productRepository.flush();
			return productRepository.existsById(newId); // trạng thái tồn tại của object mới
		}
		catch(Exception e) {
			System.out.print("InserProduct, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean UpdateProduct (Product Product,HashMap<String,String> deleimages,List<MultipartFile> addimages,boolean IsMain) {
		try {
			ImageService.uploadImages(deleimages, addimages, "product", Product.getIdProduct(),IsMain);
			return productRepository.UpdateProduct(Product.getIdProduct(),Product.getNameProduct(),Product.getIdStyle(),Product.getIdMaterial(),
					Product.getIdBrand(),Product.getIdCategory(),Product.isStatus(),Product.getDescription())>0;
		}
		catch(Exception e) {
			System.out.print("UpdateProduct, Error : " + e.getMessage());
			return false;
		}
	}
}
