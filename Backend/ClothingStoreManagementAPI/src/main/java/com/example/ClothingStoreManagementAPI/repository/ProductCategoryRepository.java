package com.example.ClothingStoreManagementAPI.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.model.Entity.ProductCategory;


import org.springframework.stereotype.Repository;
@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory,String>{
	@Query("SELECT MAX(idCategory) FROM ProductCategory")
	String SelectMaxId();
	
	// tìm kiếm màu sắc dựa trên tên màu sắc
	@Query("SELECT p.idCategory FROM ProductCategory p WHERE p.nameCategory = :nameCategory")
	String SelectIdProductCategory(@Param("nameCategory") String nameCategory);

	// chỉnh sửa màu sắc
	@Modifying
	@Query("UPDATE ProductCategory p SET p.nameCategory = :nameCategory,p.description=:description , p.idParentCategory =:idParentCategory WHERE p.idCategory = :idCategory")
	int UpdateProductCategory(@Param("idCategory") String idCategory ,@Param("nameCategory") String nameCategory ,@Param("description") String description, @Param("idParentCategory") String idParentCategory);
	
}