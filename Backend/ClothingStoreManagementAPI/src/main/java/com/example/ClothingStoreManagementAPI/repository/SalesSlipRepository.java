package com.example.ClothingStoreManagementAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.model.Entity.SalesSlip;
import com.example.ClothingStoreManagementAPI.model.DTO.SalesSlipDTO;
import java.time.LocalDate;

import org.springframework.stereotype.Repository;

@Repository
public interface SalesSlipRepository extends JpaRepository<SalesSlip, String> {
	@Query("SELECT MAX(idSalesSlip) FROM SalesSlip")
	String SelectMaxId();

	// cập nhật thông tin đơn hàng
	@Modifying
	@Query("UPDATE SalesSlip SET idCreater =:idCreater,idClient=:idClient,createDate=:createDate,deliveryAddress=:deliveryAddress,totalBill=:totalBill,"
			+ "shippingFee =:shippingFee,deliveryStatus=:deliveryStatus,note=:note,evaluate=:evaluate,refundStatus =:refundStatus,proof=:proof,discountCode=:discountCode,deliveryDate=:deliveryDate,comment=:comment WHERE idSalesSlip =:idSalesSlip")
	int UpdateSalesSlip(@Param("idSalesSlip") String idSalesSlip, @Param("idCreater") String idCreater,
			@Param("idClient") String idClient, @Param("createDate") LocalDate createDate,
			@Param("deliveryAddress") String deliveryAddress, @Param("totalBill") int totalBill,
			@Param("shippingFee") int shippingFee, @Param("deliveryStatus") String deliveryStatus,
			@Param("note") String note, @Param("evaluate") Integer evaluate,
			@Param("refundStatus") Boolean refundStatus, @Param("proof") String proof,
			@Param("discountCode") String discountCode, @Param("deliveryDate") LocalDate deliveryDate,
			@Param("comment") String comment);

	@Modifying
	@Query("UPDATE SalesSlip SET deliveryStatus=:deliveryStatus WHERE idSalesSlip =:idSalesSlip")
	int updateStatusSalesSlip(@Param("idSalesSlip") String idSalesSlip, @Param("deliveryStatus") String deliveryStatus);
}