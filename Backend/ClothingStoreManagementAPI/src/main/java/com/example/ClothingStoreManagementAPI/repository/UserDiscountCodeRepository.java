package com.example.ClothingStoreManagementAPI.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.time.LocalDate;
import com.example.ClothingStoreManagementAPI.model.Entity.UserDiscountCode;

import org.springframework.stereotype.Repository;
@Repository
public interface UserDiscountCodeRepository extends JpaRepository<UserDiscountCode,String>{
	@Query("SELECT MAX(discountCode) FROM UserDiscountCode")
	String SelectMaxId();
	// chỉnh sửa nhà cung cấp
	@Query("SELECT u FROM UserDiscountCode u WHERE u.idUser = :idUser ")
	List<UserDiscountCode> SellectUserDiscountCode (@Param("idUser") String idUser);
	@Query("SELECT u FROM UserDiscountCode u WHERE u.idUser = :idUser AND u.minimumOrderValue > :minimumOrderValue")
	List<UserDiscountCode> SellectUserDiscountCode (@Param("idUser") String idUser,@Param("minimumOrderValue") int minimumOrderValue);
	@Modifying
	@Query("UPDATE UserDiscountCode u SET u.code=:code,u.idUser=:idUser, u.discountOrPrice = :discountOrPrice,u.minimumOrderValue = :minimumOrderValue,u.expiry=:expiry WHERE u.discountCode = :discountCode")
	int UpdateUserDiscountCode(@Param("discountCode") String discountCode,@Param("code") String code ,@Param("idUser") String idUser  ,@Param("discountOrPrice") double discountOrPrice ,@Param("minimumOrderValue") int minimumOrderValue,@Param("expiry") LocalDate expiry);
}
