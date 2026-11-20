package com.example.ClothingStoreManagementAPI.product.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.product.model.Entity.ListOfReceivingStores;


import org.springframework.stereotype.Repository;
@Repository
public interface ListOfReceivingStoresRepository extends JpaRepository<ListOfReceivingStores,String>{
	@Query("SELECT MAX(idList) FROM ListOfReceivingStores")
	String SelectMaxId();
	// tìm kiếm danh sách hàng bằng mã hàng hóa
	@Query("SELECT l FROM ListOfReceivingStores l WHERE l.idPurchaseSlip = :idPurchaseSlip")
	List<ListOfReceivingStores> SellectListOfReceivingStores(@Param("idPurchaseSlip") String idPurchaseSlip);
	// chỉnh sửa chi tiết phiếu
	@Modifying
	@Query("UPDATE ListOfReceivingStores SET idPurchaseSlip =:idPurchaseSlip,idShop =:idShop,status =:status WHERE idList =:idList")
	int UpdateListOfReceivingStores(@Param("idList") String idList ,@Param("idPurchaseSlip") String idPurchaseSlip ,@Param("idShop") String idShop,@Param("status") boolean status);
	@Modifying
	@Query("DELETE FROM ListOfReceivingStores WHERE idPurchaseSlip = :idPurchaseSlip")
	int DeleteListOfDeliveryStoresByidSalesSlip(@Param("idPurchaseSlip") String idPurchaseSlip);
}