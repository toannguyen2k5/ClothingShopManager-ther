package com.example.ClothingStoreManagementAPI.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.model.Entity.Style;


import org.springframework.stereotype.Repository;
@Repository
public interface StyleRepository extends JpaRepository<Style,String>{
	@Query("SELECT MAX(idStyle) FROM Style")
	String SelectMaxId();
	// tìm kiếm màu sắc dựa trên tên màu sắc
	@Query("SELECT s.idStyle FROM Style s WHERE s.nameStyle = :nameStyle")
	String SelectIdStyle(@Param("nameStyle") String nameStyle);

	// chỉnh sửa màu sắc
	@Modifying
	@Query("UPDATE Style s SET s.nameStyle = :nameStyle,s.description=:description WHERE s.idStyle = :idStyle")
	int UpdateStyle(@Param("idStyle") String idStyle ,@Param("nameStyle") String nameStyle ,@Param("description") String description);
}
