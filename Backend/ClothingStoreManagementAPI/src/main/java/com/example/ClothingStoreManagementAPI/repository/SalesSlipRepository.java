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
public interface SalesSlipRepository extends JpaRepository<SalesSlip,String>{
	@Query("SELECT MAX(idSalesSlip) FROM SalesSlip")
	String SelectMaxId();
	// tìm kiếm khách hàng dựa trên mã khách hàng
	@Query("SELECT new  com.example.ClothingStoreManagementAPI.model.DTO.SalesSlipDTO(s.idSalesSlip , u.fullName ,u.phoneNumber , s.createDate , s.deliveryStatus)\r\n"
			+ "FROM SalesSlip s\r\n"
			+ "INNER JOIN Users u ON s.idClient = u.idUser\r\n"
			+ "WHERE s.idClient = :idClient")
	List<SalesSlipDTO> SelectSalesSlipByIdClient(@Param("idClient") String idClient);
	// tìm kiếm tất cả đơn hàng được bán trong ngày hoặc những ngày khác
	@Query("SELECT new  com.example.ClothingStoreManagementAPI.model.DTO.SalesSlipDTO(s.idSalesSlip , u.fullName ,u.phoneNumber , s.createDate , s.deliveryStatus)\r\n"
			+ "FROM SalesSlip s\r\n"
			+ "INNER JOIN Users u ON s.idClient = u.idUser\r\n"
			+ "WHERE s.createDate = :createDate")
	List<SalesSlipDTO> SellectSalesSlipByDate(@Param("createDate") LocalDate createDate);
	// tìm kiếm đơn hàng bằng mã người tạo
	@Query("SELECT new  com.example.ClothingStoreManagementAPI.model.DTO.SalesSlipDTO(s.idSalesSlip , u.fullName ,u.phoneNumber , s.createDate , s.deliveryStatus)\r\n"
			+ "FROM SalesSlip s\r\n"
			+ "INNER JOIN Users u ON u.idUser = s.idClient\r\n"
			+ "WHERE s.idCreater = :idCreater")
	List<SalesSlipDTO> SellectSalesSlipByIdCreater(@Param("idCreater") String idCreater);
	// tìm kiếm đơn hàng bằng mã người giao hàng
	@Query("SELECT new  com.example.ClothingStoreManagementAPI.model.DTO.SalesSlipDTO(s.idSalesSlip , u.fullName ,u.phoneNumber , s.createDate , s.deliveryStatus)\r\n"
			+ "FROM SalesSlip s\r\n"
			+ "INNER JOIN Users u ON u.idUser = s.idClient\r\n"
			+ "WHERE s.idDeliverer = :idDeliverer")
	List<SalesSlipDTO> SellectSalesSlipByIdDeliverer(@Param("idDeliverer") String idDeliverer);
	// cập nhật thông tin đơn hàng
	@Modifying
	@Query("UPDATE SalesSlip SET idCreater =:idCreater,idDeliverer=:idDeliverer,idClient=:idClient,createDate=:createDate,deliveryAddress=:deliveryAddress,totalBill=:totalBill,"
			+ "shippingFee =:shippingFee,deliveryStatus=:deliveryStatus,note=:note,evaluate=:evaluate,refundStatus =:refundStatus,proof=:proof,discountCode=:discountCode,deliveryDate=:deliveryDate WHERE idSalesSlip =:idSalesSlip")
	int UpdateSalesSlip (@Param("idSalesSlip")String idSalesSlip,@Param("idCreater")String idCreater,@Param("idDeliverer")String idDeliverer,@Param("idClient")String idClient,
			@Param("createDate")LocalDate createDate,@Param("deliveryAddress")String deliveryAddress,@Param("totalBill")int totalBill,@Param("shippingFee")int shippingFee,@Param("deliveryStatus")boolean deliveryStatus,
			@Param("note")String note,@Param("evaluate")Integer evaluate,@Param("refundStatus")Boolean refundStatus,@Param("proof")String proof,@Param("discountCode")String discountCode,
			@Param("deliveryDate")LocalDate deliveryDate);
}