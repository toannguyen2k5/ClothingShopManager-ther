package com.example.ClothingStoreManagementAPI.product.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.ClothingStoreManagementAPI.product.model.Entity.ProductMaterial;

import org.springframework.stereotype.Repository;

@Repository
public interface ProductMaterialRepository extends JpaRepository<ProductMaterial, String>{
	@Query("SELECT MAX(idMaterial) FROM ProductMaterial")
	String SelectMaxId();

	// tìm kiếm màu sắc dựa trên tên màu sắc
	@Query("SELECT b.idMaterial FROM ProductMaterial b WHERE b.nameMaterial = :nameMaterial")
	String SelectidMaterial(@Param("nameMaterial") String nameMaterial);

	// chỉnh sửa màu sắc
	@Modifying
	 @Query("UPDATE ProductMaterial b SET b.nameMaterial = :nameMaterial, b.description = :description WHERE b.idMaterial = :idMaterial")
	    int UpdateProductMaterial(@Param("idMaterial") String idMaterial,
	                    @Param("nameMaterial") String nameMaterial,
	                    @Param("description") String description);
}
