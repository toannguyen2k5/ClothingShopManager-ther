package com.example.ClothingStoreManagementAPI.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.ClothingStoreManagementAPI.model.Entity.InventoryShop;
@Repository
public interface InventoryShopReponsitory extends JpaRepository<InventoryShop,String>{
	@Query("SELECT MAX(idList) FROM InventoryShop")
	String SelectMaxId();
	// tìm kiếm tổng số lượng hàng tồn kho theo mã sản phẩm
	@Query("SELECT SUM(u.quantity) FROM InventoryShop u WHERE u.idDetail = :idDetail")
	Long SelectInventoryShop(@Param("idDetail") String idDetail);
	
	//tìm kiếm số lượng tồn kho
	@Query("SELECT u FROM InventoryShop u WHERE u.idShop = :idShop AND u.idDetail = :idDetail")
	InventoryShop SelectInventoryShop(@Param("idShop") String idShop , @Param("idDetail") String idDetail);
	// update số lượng tồn kho
	@Modifying
	@Query("UPDATE InventoryShop u SET u.quantity = :quantity WHERE u.idShop = :idShop AND u.idDetail = :idDetail")
	long UpdateInventoryShop(@Param("quantity") long quantity ,@Param("idShop") String idShop, @Param("idDetail") String idDetail);
}