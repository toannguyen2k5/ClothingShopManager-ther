package com.example.ClothingStoreManagementAPI.product.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.product.model.Entity.ProductCategory;


import org.springframework.stereotype.Repository;
@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory,String>{
	@Query("SELECT MAX(idCategory) FROM ProductCategory")
	String SelectMaxId();
	

	@Query("SELECT p.idCategory FROM ProductCategory p WHERE p.nameCategory = :nameCategory")
	String SelectIdProductCategory(@Param("nameCategory") String nameCategory);
	
	@Query("SELECT p.idCategory FROM ProductCategory p WHERE p.idParentCategory = :idCategory or p.idCategory = :idCategory")
	List<String> SelectIdChildCategory(@Param("idCategory") String idCategory);
	
	@Modifying
	@Query("UPDATE ProductCategory p SET p.nameCategory = :nameCategory,p.description=:description , p.idParentCategory =:idParentCategory WHERE p.idCategory = :idCategory")
	int UpdateProductCategory(@Param("idCategory") String idCategory ,@Param("nameCategory") String nameCategory ,@Param("description") String description, @Param("idParentCategory") String idParentCategory);
	
}