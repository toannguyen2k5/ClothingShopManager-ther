package com.example.ClothingStoreManagementAPI.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.ClothingStoreManagementAPI.model.Entity.Notification;

import org.springframework.stereotype.Repository;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, String>{
	@Query("SELECT MAX(idNotification) FROM Notification")
	String SelectMaxId();

	// tìm kiếm màu sắc dựa trên tên màu sắc
	@Query("SELECT b FROM Notification b WHERE b.idUser = :idUser")
	List<Notification> SelectNotification(@Param("idUser") String idUser); 
	@Modifying
	// tìm kiếm màu sắc dựa bằng từ khóa tìm kiếm
	@Query("UPDATE Notification SET viewingStatus = true WHERE idUser = :idUser")
	int SetViewingStatus(@Param("idUser") String idUser);
	@Modifying
	@Query("DELETE FROM Notification WHERE idUser = :idUser")
	int DeleteForUser(@Param("idUser") String idUser);
}
