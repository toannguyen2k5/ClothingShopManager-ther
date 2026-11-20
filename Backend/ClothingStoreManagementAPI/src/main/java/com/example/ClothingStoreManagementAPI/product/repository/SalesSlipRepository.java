package com.example.ClothingStoreManagementAPI.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Lock;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import jakarta.persistence.LockModeType;

import com.example.ClothingStoreManagementAPI.product.model.Entity.SalesSlip;
import com.example.ClothingStoreManagementAPI.product.model.DTO.SalesSlipDTO;
import java.time.LocalDate;

import org.springframework.stereotype.Repository;

@Repository
public interface SalesSlipRepository extends JpaRepository<SalesSlip, String> {
	@Query("SELECT MAX(idSalesSlip) FROM SalesSlip")
	String SelectMaxId();

	@Query("SELECT CASE WHEN COUNT(s) > 0 THEN true ELSE false END FROM SalesSlip s "
			+ "WHERE s.discountCode = :discountCode AND s.deliveryStatus <> 'SCd005'")
	boolean ExistsActiveOrderUsingDiscountCode(@Param("discountCode") String discountCode);

	@Lock(LockModeType.PESSIMISTIC_WRITE)
	@Query("SELECT s FROM SalesSlip s WHERE s.idSalesSlip = :idSalesSlip")
	java.util.Optional<SalesSlip> FindByIdForUpdate(@Param("idSalesSlip") String idSalesSlip);

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