package com.example.ClothingStoreManagementAPI.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Brand;

import org.springframework.stereotype.Repository;

@Repository
public interface BrandRepository extends JpaRepository<Brand, String> {
	@Query("SELECT MAX(idBrand) FROM Brand")
	String SelectMaxId();
	
	// tìm kiếm màu sắc dựa trên tên màu sắc
	@Query("SELECT b.idBrand FROM Brand b WHERE b.nameBrand = :nameBrand")
	String SelectIdBrand(@Param("nameBrand") String nameBrand);

	// chỉnh sửa màu sắc
	@Modifying
	 @Query("UPDATE Brand b SET b.nameBrand = :nameBrand, b.description = :description WHERE b.idBrand = :idBrand")
	    int UpdateBrand(@Param("idBrand") String idBrand,
	                    @Param("nameBrand") String nameBrand,
	                    @Param("description") String description);
}