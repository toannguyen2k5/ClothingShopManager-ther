package com.example.ClothingStoreManagementAPI.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.model.Entity.ListOfDeliveryStores;

import org.springframework.stereotype.Repository;
@Repository
public interface ListOfDeliveryStoresRepository  extends JpaRepository<ListOfDeliveryStores,String>{
	@Query("SELECT MAX(idList) FROM ListOfDeliveryStores")
	String SelectMaxId();
	// tìm kiếm danh sách hàng bằng mã hàng hóa
	@Query("SELECT l FROM ListOfDeliveryStores l WHERE l.idSalesSlip = :idSalesSlip")
	List<ListOfDeliveryStores> SellectListOfDeliveryStores(@Param("idSalesSlip") String idSalesSlip);
	// chỉnh sửa chi tiết phiếu
	@Modifying
	@Query("UPDATE ListOfDeliveryStores SET idSalesSlip =:idSalesSlip,idShop =:idShop,status =:status WHERE idList =:idList")
	int UpdateListOfDeliveryStores(@Param("idList") String idList ,@Param("idSalesSlip") String idSalesSlip ,@Param("idShop") String idShop,@Param("status") boolean status);
	@Modifying
	@Query("DELETE FROM ListOfDeliveryStores WHERE idSalesSlip = :idSalesSlip")
	int DeleteListOfDeliveryStoresByidSalesSlip(@Param("idSalesSlip") String idSalesSlip);
}
