package com.example.ClothingStoreManagementAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.model.Entity.ListWarehouseInCharge;


import org.springframework.stereotype.Repository;

@Repository
public interface ListWarehouseInChargeRepository extends JpaRepository<ListWarehouseInCharge, String>{
	// trả về id người dùng lớn nhất
	@Query("SELECT MAX(idList) FROM ListWarehouseInCharge")
	String SelectMaxId();
	// chỉnh sửa thông tin shop phụ trách
	@Modifying
	@Query("UPDATE ListWarehouseInCharge SET idShop = :idShop WHERE idList = :idList")
	int UpdateWarehouseInCharge(@Param("idList") String idList,@Param("idShop") String idShop);
	//chỉnh sửa thông tin như numberCCCD hay motorbikeNumber
	@Modifying
	@Query("UPDATE ListWarehouseInCharge SET cccdNumber = :cccdNumber ,motorbikeNumber =:motorbikeNumber WHERE idList = :idList")
	int UpdateWarehouseInCharge(@Param("idList") String idList,@Param("cccdNumber") String cccdNumber,@Param("motorbikeNumber") String motorbikeNumber);
}
