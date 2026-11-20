package com.example.ClothingStoreManagementAPI.product.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.product.model.Entity.ProductImage;


import org.springframework.stereotype.Repository;
@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage,String>{
	@Query("SELECT MAX(idImage) FROM ProductImage")
	String SelectMaxId();
	@Query("SELECT p.idImage FROM ProductImage p WHERE p.path = :path")
	String SellectProductImageByPath(@Param("path") String path);
	// tìm kiếm danh sách ảnh liên quan đển idProduct
	@Query("SELECT p FROM ProductImage p WHERE p.idProduct = :idProduct")
	List<ProductImage> SellectProductImageByIdProduct(@Param("idProduct") String idProduct);
}
