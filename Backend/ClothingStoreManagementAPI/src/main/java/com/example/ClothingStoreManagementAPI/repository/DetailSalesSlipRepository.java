package com.example.ClothingStoreManagementAPI.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.model.Entity.DetailSalesSlip;


import org.springframework.stereotype.Repository;
@Repository
public interface DetailSalesSlipRepository extends JpaRepository<DetailSalesSlip,String>{
	@Query("SELECT MAX(idDetail) FROM DetailSalesSlip")
	String SelectMaxId();
	// tìm kiếm danh sách hàng bằng mã hàng hóa
	@Query("SELECT idDetail,idDetailProduct,quantity,price FROM DetailSalesSlip WHERE idList = :idList")
	List<DetailSalesSlip> SellectDetailSalesSlip(@Param("idList") String idList);
	// chỉnh sửa chi tiết phiếu
	@Modifying
	@Query("UPDATE DetailSalesSlip SET idList =:idList,idDetailProduct =:idDetailProduct,quantity =:quantity,price =:price WHERE idDetail = :idDetail")
	int UpdateDetailSalesSlip(@Param("idDetail") String idDetail ,@Param("idList") String idList ,@Param("idDetailProduct") String idDetailProduct,@Param("quantity") int quantity ,@Param("price") int price );
	// xóa danh sách phiếu bởi mã List
	@Modifying
	@Query("DELETE FROM DetailSalesSlip WHERE idList = :idList")
	int DeleteDetailSalesSlipByIdList(@Param("idList") String idList);
}
