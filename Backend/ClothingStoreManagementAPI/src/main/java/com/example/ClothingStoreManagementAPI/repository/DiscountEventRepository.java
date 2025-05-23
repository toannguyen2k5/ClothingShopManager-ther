package com.example.ClothingStoreManagementAPI.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.model.Entity.DiscountEvent;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;

@Repository
public interface DiscountEventRepository extends JpaRepository<DiscountEvent,String>{
	@Query("SELECT MAX(idEvent) FROM DiscountEvent")
	String SelectMaxId();
	
	// chỉnh sửa thông tin sự kiện
	@Modifying
	@Query("UPDATE DiscountEvent d SET d.eventCode = :eventCode,d.idProduct=:idProduct,d.decrease=:decrease,d.quantityLimit=:quantityLimit,d.eventDeadline=:eventDeadline,d.description=:description\r\n"
			+ "WHERE d.idEvent = :idEvent")
	int UpdateDiscountEvent(@Param("idEvent") String idEvent ,@Param("eventCode") String eventCode ,@Param("idProduct") String idProduct,@Param("decrease") Float decrease,@Param("quantityLimit") Integer quantityLimit,@Param("eventDeadline") LocalDateTime eventDeadline,@Param("description") String description);
}