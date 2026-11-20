package com.example.ClothingStoreManagementAPI.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.product.model.Entity.PurchaseSlip;
import java.time.LocalDate;

import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseSlipRepository extends JpaRepository<PurchaseSlip, String> {
	@Query("SELECT MAX(idPurchaseSlip) FROM PurchaseSlip")
	String SelectMaxId();

	// tìm kiếm khách hàng dựa trên mã nhà cung cấp
	@Query("SELECT p FROM PurchaseSlip p WHERE idSupplier = :idSupplier")
	List<PurchaseSlip> SelectPurchaseSlipByidSupplier(@Param("idSupplier") String idSupplier);

	// tìm kiếm tất cả đơn hàng được bán trong ngày hoặc những ngày khác
	@Query("SELECT p FROM PurchaseSlip p WHERE dayCreate = :dayCreate")
	List<PurchaseSlip> SellectPurchaseSlipByDate(@Param("dayCreate") LocalDate dayCreate);

	// tìm kiếm đơn hàng bằng mã người tạo
	@Query("SELECT p FROM PurchaseSlip p WHERE idCreater = :idCreater")
	List<PurchaseSlip> SellectPurchaseSlipByIdCreater(@Param("idCreater") String idCreater);

	// cập nhật thông tin đơn hàng
	@Modifying
	@Query("UPDATE PurchaseSlip SET idCreater =:idCreater , idSupplier =:idSupplier, dayCreate =:dayCreate,totalBill =:totalBill,"
			+ "approveStatus =:approveStatus,statusUpdateDate =:statusUpdateDate,idStatusEditor =:idStatusEditor, statusReceive = :statusReceive WHERE idPurchaseSlip =:idPurchaseSlip")
	int UpdatePurchaseSlip(@Param("idPurchaseSlip") String idPurchaseSlip, @Param("idCreater") String idCreater,
			@Param("idSupplier") String idSupplier, @Param("dayCreate") LocalDate dayCreate,
			@Param("totalBill") int totalBill, @Param("approveStatus") String approveStatus,
			@Param("statusUpdateDate") LocalDate statusUpdateDate, @Param("idStatusEditor") String idStatusEditor,
			@Param("statusReceive") Boolean statusReceive);

	@Modifying
	@Query("UPDATE PurchaseSlip SET approveStatus =:approveStatus,statusUpdateDate =:statusUpdateDate,idStatusEditor =:idStatusEditor WHERE idPurchaseSlip =:idPurchaseSlip")
	int updateStatusPurchaseSlip(@Param("idPurchaseSlip") String idPurchaseSlip,
			@Param("approveStatus") String approveStatus, @Param("statusUpdateDate") LocalDate statusUpdateDate,
			@Param("idStatusEditor") String idStatusEditor);
}
