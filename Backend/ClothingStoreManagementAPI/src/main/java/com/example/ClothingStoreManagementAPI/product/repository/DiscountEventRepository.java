package com.example.ClothingStoreManagementAPI.product.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.product.model.Entity.DiscountEvent;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;

@Repository
public interface DiscountEventRepository extends JpaRepository<DiscountEvent,String>{
	@Query("SELECT MAX(idEvent) FROM DiscountEvent")
	String SelectMaxId();

	@Query("SELECT d FROM DiscountEvent d WHERE d.idProduct = :idProduct AND d.eventDeadline > :now ORDER BY d.eventDeadline ASC")
	List<DiscountEvent> SelectActiveDiscountEvents(@Param("idProduct") String idProduct, @Param("now") LocalDate now);
	
	// chỉnh sửa thông tin sự kiện
	@Modifying
	@Query("UPDATE DiscountEvent d SET d.eventCode = :eventCode,d.idProduct=:idProduct,d.decrease=:decrease,d.quantityLimit=:quantityLimit,d.eventDeadline=:eventDeadline,d.description=:description\r\n"
			+ "WHERE d.idEvent = :idEvent")
	int UpdateDiscountEvent(@Param("idEvent") String idEvent ,@Param("eventCode") String eventCode ,@Param("idProduct") String idProduct,@Param("decrease") Float decrease,@Param("quantityLimit") Integer quantityLimit,@Param("eventDeadline") LocalDate eventDeadline,@Param("description") String description);
}