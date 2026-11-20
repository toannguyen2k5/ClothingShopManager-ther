package com.example.ClothingStoreManagementAPI.product.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.time.LocalTime;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Shop;


import org.springframework.stereotype.Repository;
@Repository
public interface ShopRepository extends JpaRepository<Shop,String>{
	@Query("SELECT MAX(idShop) FROM Shop")
	String SelectMaxId();
	
	// tìm kiếm nhà cung cấp dựa trên tên nhà cung cấp
	@Query("SELECT s.idShop FROM Shop s WHERE s.nameShop = :nameShop")
	String SelectIdShop(@Param("nameShop") String nameShop);
	
	@Modifying
	@Query("UPDATE Shop SET status=:status WHERE idShop = :idShop")
	int UpdateShop(@Param("idShop") String idShop ,@Param("status") boolean status);
	
	// chỉnh sửa nhà cung cấp
	@Modifying
	@Query("UPDATE Shop SET nameShop = :nameShop,address = :address,openingTime=:openingTime, closingTime = :closingTime WHERE idShop = :idShop")
	int UpdateShop(@Param("idShop") String idShop ,@Param("nameShop") String nameShop ,@Param("address") String address,@Param("openingTime") LocalTime openingTime ,@Param("closingTime") LocalTime closingTime);
}
