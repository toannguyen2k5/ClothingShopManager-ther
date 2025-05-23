package com.example.ClothingStoreManagementAPI.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.repository.NotificationRepository;
import com.example.ClothingStoreManagementAPI.model.Entity.Notification;
import java.util.*;
@Service
public class NotificationService {
	@Autowired
	private NotificationRepository NotificationRepository;
	private Common common;
	public List<Notification> SelectNotification(String idUser) {
		try {
			return NotificationRepository.SelectNotification(idUser);
		}
		catch(Exception e) {
			System.out.print("SelectIdNotification, Error : " + e.getMessage());
			return null;
		}
	}
	public boolean InsertNotification(Notification Notification){
		try {
			String idcurrent = NotificationRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(Notification.class);
				Notification.setIdNotification(newId);
				NotificationRepository.save(Notification); // thêm Notification vào csdl
				NotificationRepository.flush();
				return NotificationRepository.existsById(newId); // trạng thái tồn tại của object mới
			}
		catch(Exception e) {
			System.out.print("InsertNotification, Error : " + e.getMessage());
			return false;
		}
	}
	// xét lại trạng thái xem tin
	@Transactional
	public boolean SetViewingStatus (String idUser) {
		try {
			return NotificationRepository.SetViewingStatus(idUser) > 0;
		}
		catch(Exception e) {
			System.out.print("InsertNotification, Error : " + e.getMessage());
			return false;
		}
	}
	// xóa hết thông báo
	@Transactional
	public boolean DeleteNotifications (String idUser) {
		try {
			return NotificationRepository.DeleteForUser(idUser) > 0;
		}
		catch(Exception e) {
			System.out.print("InsertNotification, Error : " + e.getMessage());
			return false;
		}
	}
}
