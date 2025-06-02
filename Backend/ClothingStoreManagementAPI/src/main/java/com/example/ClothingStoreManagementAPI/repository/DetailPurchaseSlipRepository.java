package com.example.ClothingStoreManagementAPI.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.model.Entity.DetailPurchaseSlip;
import com.example.ClothingStoreManagementAPI.model.Entity.DetailPurchaseSlip;

import org.springframework.stereotype.Repository;
@Repository
public interface DetailPurchaseSlipRepository extends JpaRepository<DetailPurchaseSlip,String>{
	@Query("SELECT MAX(idDetail) FROM DetailPurchaseSlip")
	String SelectMaxId();
	// tìm kiếm danh sách hàng bằng mã hàng hóa
	@Query("SELECT d FROM DetailPurchaseSlip d WHERE idList = :idList")
	List<DetailPurchaseSlip> SellectDetailPurchaseSlip(@Param("idList") String idList);
	// thêm chi tiết phiếu
	@Query("INSERT INTO DetailPurchaseSlip(idDetail,idList,idDetailProduct,quantity,price) VALUES (:idDetail,:idList,:idDetailProduct,:quantity,:price)")
	int InsertDetailPurchaseSlip(@Param("idDetail") String idDetail ,@Param("idList") String idList ,@Param("idDetailProduct") String idDetailProduct,@Param("quantity") int quantity ,@Param("price") int price );
	// chỉnh sửa chi tiết phiếu
	@Modifying
	@Query("UPDATE DetailPurchaseSlip SET idList =:idList,idDetailProduct =:idDetailProduct,quantity =:quantity,price =:price WHERE idDetail = :idDetail")
	int UpdateDetailPurchaseSlip(@Param("idDetail") String idDetail ,@Param("idList") String idList ,@Param("idDetailProduct") String idDetailProduct,@Param("quantity") int quantity ,@Param("price") int price );
	// xóa chi tiết phiếu
	@Modifying
	@Query("DELETE FROM DetailSalesSlip WHERE idList = :idList")
	int DeleteDetailSalesSlipByIdList(@Param("idList") String idList);
}
