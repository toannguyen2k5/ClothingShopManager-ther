package com.example.ClothingStoreManagementAPI.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.model.Entity.*;


import org.springframework.stereotype.Repository;
@Repository
public interface DetailedRefundSlipReponsitory extends JpaRepository<DetailedRefundSlip,String>{
	@Query("SELECT MAX(idDetailedRefundSlip) FROM DetailedRefundSlip")
	String SelectMaxId();
	// tìm kiếm tất cả chi tiếu phiếu hoàn trả
	@Query("SELECT c FROM DetailedRefundSlip c WHERE c.idSalesSlip = :idSalesSlip")
	List<DetailedRefundSlip> ShowDetailedRefundSlips(@Param("idSalesSlip") String idSalesSlip);
	// chỉnh sửa màu sắc
	@Modifying
	@Query("UPDATE DetailedRefundSlip c SET c.idDetail = :idDetail,c.createTime=:createTime,c.updateTime=:updateTime,c.quantity=:quantity WHERE c.idDetailedRefundSlip = :idDetailedRefundSlip")
	int UpdateDetailedRefundSlip(@Param("idDetailedRefundSlip") String idDetailedRefundSlip ,@Param("idDetail") String idDetail ,@Param("createTime") String createTime,
			@Param("updateTime") String updateTime,@Param("quantity") String quantity);
	// xóa hết chi tiết phiếu
	@Modifying
	@Query("DELETE FROM DetailedRefundSlip c WHERE c.idSalesSlip = :idSalesSlip")
	int DeleteDetailedRefundSlips(@Param("idSalesSlip") String idSalesSlip);
	// lấy danh sách shop ứng với mã phiếu và chi tiết quần áo
	@Query("SELECT l.idShop FROM ListOfDeliveryStores l\r\n"
			+ "INNER JOIN DetailedRefundSlip df ON df.idSalesSlip = l.idSalesSlip\r\n"
			+ "INNER JOIN DetailSalesSlip ds ON ds.idDetail = df.idDetail\r\n"
			+ "WHERE l.idSalesSlip = :idSalesSlip AND df.idDetail = :idDetail")
	List<String> FindShopDeliverys(@Param("idSalesSlip") String idSalesSlip ,@Param("idDetail") String idDetail );
}