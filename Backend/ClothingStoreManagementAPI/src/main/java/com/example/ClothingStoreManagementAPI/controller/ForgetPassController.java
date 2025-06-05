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
	public ResponseEntity<?> forgetpass(@RequestParam String email,@RequestParam String code) {
		return ResponseEntity.ok(common.ReturnReponse(forgetPassService.SendEmail(email,code), "Send", "email"));
	}
	@GetMapping("/reset")
	public ResponseEntity<?> resetpass(@RequestParam String idUser,@RequestParam String pass) {
		return ResponseEntity.ok(common.ReturnReponse(forgetPassService.resetpass(idUser,pass), "reset", "pass"));
	}
}
