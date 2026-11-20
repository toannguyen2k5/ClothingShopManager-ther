package com.example.ClothingStoreManagementAPI.product.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.product.service.*;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Notification;

import java.util.HashMap;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Notification")
public class NotificationController {
	@Autowired
	private NotificationService NotificationService;
	@Autowired
	private Common common;
	@GetMapping("/sellectNotification")
	public ResponseEntity<?> SellectNotification(@RequestParam String idUser){
		List<Notification> Notifications = NotificationService.SelectNotification(idUser);
		return ResponseEntity.ok(common.ReturnReponse(Notifications, "Sellect", "Notification"));
	}
	@PostMapping("/insertNotification")
	public ResponseEntity<?> InsertNotification(@RequestBody Notification Notification){
		return ResponseEntity.ok(common.ReturnReponse(NotificationService.InsertNotification(Notification), "Insert", "Notification"));
	}
	@GetMapping("/setViewingStatus")
	public ResponseEntity<?>SetViewingStatus(@RequestParam String idUser){
		return ResponseEntity.ok(common.ReturnReponse(NotificationService.SetViewingStatus(idUser), "Set viewing status", "Notification"));
	}
	@GetMapping("/updateNotification")
	public ResponseEntity<?> UpdateNotification(@RequestParam String idUser){
		return ResponseEntity.ok(common.ReturnReponse(NotificationService.DeleteNotifications(idUser), "update", "Notification"));
	} 
}
