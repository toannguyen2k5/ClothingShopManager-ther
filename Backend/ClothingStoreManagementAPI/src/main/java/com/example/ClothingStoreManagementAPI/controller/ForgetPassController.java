package com.example.ClothingStoreManagementAPI.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.service.*;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class ForgetPassController {
	@Autowired
	private ForgetPassService forgetPassService;
	@Autowired
	private Common common;
	@GetMapping("/forgetpass")
	public ResponseEntity<?> forgetpass(@RequestParam String email) {
		return ResponseEntity.ok(common.ReturnReponse(forgetPassService.SendEmail(email), "Send", "email"));
	}
}
