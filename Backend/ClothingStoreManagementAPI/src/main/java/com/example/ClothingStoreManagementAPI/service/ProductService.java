package com.example.ClothingStoreManagementAPI.service;
import java.time.LocalDate;

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
	@Transactional(readOnly = true)
	public List<ShowProductDTO> SellectAll(int limit , int offset , int role_level){
		try {
			String find_all = role_level == 0 ? "WHERE p.status = true " : "";
			Query query = entityManager.createQuery(
				    "SELECT new com.example.ClothingStoreManagementAPI.model.DTO.ShowProductDTO(" +
				    "p.idProduct, p.nameProduct, b.nameBrand, pc.nameCategory, sup.nameSupplier, " +
				    "s.nameStyle, pm.nameMaterial, pe.price, d.decrease, pi.path, p.status, SUM(is.quantity), p.description) "+
				    "FROM Product p " +
				    "LEFT JOIN Brand b ON p.idBrand = b.idBrand " +
				    "LEFT JOIN Supplier sup ON sup.idSupplier = p.idSupplier " +
				    "LEFT JOIN ProductCategory pc ON pc.idCategory = p.idCategory " +
				    "LEFT JOIN Style s ON s.idStyle = p.idStyle " +
				    "LEFT JOIN ProductMaterial pm ON pm.idMaterial = p.idMaterial " +
				    "LEFT JOIN DetailProduct dp ON dp.idProduct = p.idProduct " +
				    "LEFT JOIN InventoryShop is ON is.idDetail = dp.idDetail " +
				    "LEFT JOIN Price pe ON pe.idProduct = p.idProduct AND pe.status = true " +
				    "LEFT JOIN DiscountEvent d ON d.idProduct = p.idProduct AND (d.eventDeadline IS NULL OR d.eventDeadline >= :today) " +
				    "LEFT JOIN ProductImage pi ON pi.idProduct = p.idProduct AND pi.isMain = true " +
				    find_all +
				    "GROUP BY p.idProduct, p.nameProduct, b.nameBrand, pc.nameCategory, sup.nameSupplier, " +
				    "s.nameStyle, pm.nameMaterial, pe.price, d.decrease, pi.path, p.status",
				    ShowProductDTO.class
				);
			query.setParameter("today", LocalDate.now()); // 👈 thiếu dòng này
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
	@Transactional(readOnly = true)
	public List<ShowProductDTO> SellectAllBySupplier(int limit , int offset , String idSupplier){
		try {
			Query query = entityManager.createQuery(
				    "SELECT new com.example.ClothingStoreManagementAPI.model.DTO.ShowProductDTO(" +
				    "p.idProduct, p.nameProduct, b.nameBrand, pc.nameCategory, sup.nameSupplier, " +
				    "s.nameStyle, pm.nameMaterial, pe.price, d.decrease, pi.path, p.status, SUM(is.quantity), p.description) "+
				    "FROM Product p " +
				    "LEFT JOIN Brand b ON p.idBrand = b.idBrand " +
				    "LEFT JOIN Supplier sup ON sup.idSupplier = p.idSupplier " +
				    "LEFT JOIN ProductCategory pc ON pc.idCategory = p.idCategory " +
				    "LEFT JOIN Style s ON s.idStyle = p.idStyle " +
				    "LEFT JOIN ProductMaterial pm ON pm.idMaterial = p.idMaterial " +
				    "LEFT JOIN DetailProduct dp ON dp.idProduct = p.idProduct " +
				    "LEFT JOIN InventoryShop is ON is.idDetail = dp.idDetail " +
				    "LEFT JOIN Price pe ON pe.idProduct = p.idProduct AND pe.status = true " +
				    "LEFT JOIN DiscountEvent d ON d.idProduct = p.idProduct AND (d.eventDeadline IS NULL OR d.eventDeadline >= :today) " +
				    "LEFT JOIN ProductImage pi ON pi.idProduct = p.idProduct AND pi.isMain = true " +
				    "WHERE p.status = true AND p.idSupplier = :idSupplier " +
				    "GROUP BY p.idProduct, p.nameProduct, b.nameBrand, pc.nameCategory, sup.nameSupplier, " +
				    "s.nameStyle, pm.nameMaterial, pe.price, d.decrease, pi.path, p.status",
				    ShowProductDTO.class
				);
			query.setParameter("today", LocalDate.now()); // 👈 thiếu dòng này
			query.setParameter("idSupplier", idSupplier);
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
	// dùng để xem danh sách tồn kho
	@Transactional(readOnly = true)
	public List<ShowProductDTO> SellectInventoryShop(int limit , int offset , String idShop){
		try {
			Query query = entityManager.createQuery(
				    "SELECT new com.example.ClothingStoreManagementAPI.model.DTO.ShowProductDTO(" +
				    "p.idProduct, p.nameProduct, b.nameBrand, pc.nameCategory, sup.nameSupplier, " +
				    "s.nameStyle, pm.nameMaterial, pe.price, d.decrease, pi.path, p.status, SUM(is.quantity), p.description) "+
				    "FROM Product p " +
				    "LEFT JOIN Brand b ON p.idBrand = b.idBrand " +
				    "LEFT JOIN Supplier sup ON sup.idSupplier = p.idSupplier " +
				    "LEFT JOIN ProductCategory pc ON pc.idCategory = p.idCategory " +
				    "LEFT JOIN Style s ON s.idStyle = p.idStyle " +
				    "LEFT JOIN ProductMaterial pm ON pm.idMaterial = p.idMaterial " +
				    "LEFT JOIN DetailProduct dp ON dp.idProduct = p.idProduct " +
				    "INNER JOIN InventoryShop is ON is.idDetail = dp.idDetail AND is.idShop = :idShop " +
				    "LEFT JOIN Price pe ON pe.idProduct = p.idProduct AND pe.status = true " +
				    "LEFT JOIN DiscountEvent d ON d.idProduct = p.idProduct AND (d.eventDeadline IS NULL OR d.eventDeadline >= :today) " +
				    "LEFT JOIN ProductImage pi ON pi.idProduct = p.idProduct AND pi.isMain = true " +
				    "WHERE p.status = true " +
				    "GROUP BY p.idProduct, p.nameProduct, b.nameBrand, pc.nameCategory, sup.nameSupplier, " +
				    "s.nameStyle, pm.nameMaterial, pe.price, d.decrease, pi.path, p.status",
				    ShowProductDTO.class
				);
			query.setParameter("today", LocalDate.now()); // 👈 thiếu dòng này
			query.setParameter("idShop", idShop);
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
	@Transactional(readOnly = true)
	public List<ShowProductDTO> SellectInfor(String select,int limit , int offset){
		try {
			Query query = entityManager.createQuery(
				    "SELECT new com.example.ClothingStoreManagementAPI.model.DTO.ShowProductDTO(" +
				    "p.idProduct, p.nameProduct, b.nameBrand, pc.nameCategory, sup.nameSupplier, " +
				    "s.nameStyle, pm.nameMaterial, pe.price, d.decrease, pi.path, p.status, SUM(is.quantity), p.description) "+
				    "FROM Product p " +
				    "LEFT JOIN Brand b ON p.idBrand = b.idBrand " +
				    "LEFT JOIN Supplier sup ON sup.idSupplier = p.idSupplier " +
				    "LEFT JOIN ProductCategory pc ON pc.idCategory = p.idCategory " +
				    "LEFT JOIN Style s ON s.idStyle = p.idStyle " +
				    "LEFT JOIN ProductMaterial pm ON pm.idMaterial = p.idMaterial " +
				    "LEFT JOIN DetailProduct dp ON dp.idProduct = p.idProduct " +
				    "LEFT JOIN InventoryShop is ON is.idDetail = dp.idDetail " +
				    "LEFT JOIN Price pe ON pe.idProduct = p.idProduct AND pe.status = true " +
				    "LEFT JOIN DiscountEvent d ON d.idProduct = p.idProduct " +
				    "LEFT JOIN ProductImage pi ON pi.idProduct = p.idProduct AND pi.isMain = true " +
				    "WHERE p.idProduct LIKE CONCAT('%', :query, '%') " +
			       "OR p.nameProduct LIKE CONCAT('%', :query, '%') " +
			       "OR p.description LIKE CONCAT('%', :query, '%') " +
				    "GROUP BY p.idProduct, p.nameProduct, b.nameBrand, pc.nameCategory, sup.nameSupplier, " +
				    "s.nameStyle, pm.nameMaterial, pe.price, d.decrease, pi.path, p.status",
				    ShowProductDTO.class
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
	@Transactional(readOnly = true)
	public List<ShowProductDTO> SellectByCategory(String select,int limit , int offset){
		try {
			Query query = entityManager.createQuery(
					"SELECT new com.example.ClothingStoreManagementAPI.model.DTO.ShowProductDTO(" +
						    "p.idProduct, p.nameProduct, b.nameBrand, pc.nameCategory, sup.nameSupplier, " +
						    "s.nameStyle, pm.nameMaterial, pe.price, d.decrease, pi.path, p.status, SUM(is.quantity), p.description) "+
						    "FROM Product p " +
						    "LEFT JOIN Brand b ON p.idBrand = b.idBrand " +
						    "LEFT JOIN Supplier sup ON sup.idSupplier = p.idSupplier " +
						    "LEFT JOIN ProductCategory pc ON pc.idCategory = p.idCategory " +
						    "LEFT JOIN Style s ON s.idStyle = p.idStyle " +
						    "LEFT JOIN ProductMaterial pm ON pm.idMaterial = p.idMaterial " +
						    "LEFT JOIN DetailProduct dp ON dp.idProduct = p.idProduct " +
						    "LEFT JOIN InventoryShop is ON is.idDetail = dp.idDetail " +
						    "LEFT JOIN Price pe ON pe.idProduct = p.idProduct AND pe.status = true " +
						    "LEFT JOIN DiscountEvent d ON d.idProduct = p.idProduct " +
						    "LEFT JOIN ProductImage pi ON pi.idProduct = p.idProduct AND pi.isMain = true " +
			       "WHERE p.idCategory =:query " +
			       "GROUP BY p.idProduct, p.nameProduct, b.nameBrand, pc.nameCategory, sup.nameSupplier, " +
				    "s.nameStyle, pm.nameMaterial, pe.price, d.decrease, pi.path, p.status",
				    ShowProductDTO.class
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
			System.out.print("SellectByCategory, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional
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
	@Transactional
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
			if(addimages!=null && !addimages.isEmpty())ImageService.uploadImages(deleimages, addimages, "product", Product.getIdProduct(),IsMain);
			return productRepository.UpdateProduct(Product.getIdProduct(),Product.getNameProduct(),Product.getIdStyle(),Product.getIdMaterial(),
					Product.getIdBrand(),Product.getIdCategory(),Product.isStatus(),Product.getDescription(),Product.getIdSupplier())>0;
		}
		catch(Exception e) {
			System.out.print("UpdateProduct, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean UpdateSaleStatus (String idProduct,boolean status) {
		try {
			return productRepository.UpdateSaleStatus(idProduct,status)>0;
		}
		catch(Exception e) {
			System.out.print("UpdateProduct, Error : " + e.getMessage());
			return false;
		}
	}
}
