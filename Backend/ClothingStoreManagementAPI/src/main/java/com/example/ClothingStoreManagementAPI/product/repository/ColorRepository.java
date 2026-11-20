package com.example.ClothingStoreManagementAPI.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.product.model.Entity.Color;


import org.springframework.stereotype.Repository;
@Repository
public interface ColorRepository  extends JpaRepository<Color,String>{
	@Query("SELECT MAX(idColor) FROM Color")
	String SelectMaxId();
	
	// tìm kiếm màu sắc dựa trên tên màu sắc
	@Query("SELECT c.idColor FROM Color c WHERE c.nameColor = :nameColor")
	String SelectIdColor(@Param("nameColor") String nameColor);

	// chỉnh sửa màu sắc
	@Modifying
	@Query("UPDATE Color c SET c.nameColor = :nameColor,c.description=:description WHERE c.idColor = :idColor")
	int UpdateColor(@Param("idColor") String idColor ,@Param("nameColor") String nameColor ,@Param("description") String description);
}
