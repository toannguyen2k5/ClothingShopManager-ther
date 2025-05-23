package com.example.ClothingStoreManagementAPI.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.model.Entity.UserDiscountCode;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/UserDiscountCode")
public class UserDiscountCodeController {
	@Autowired
	private UserDiscountCodeService UserDiscountCodeService;
	@Autowired
	private Common common;
	@GetMapping("/sellectAll")
	public ResponseEntity<?> sellectAll(@RequestParam String idUser){
		List<UserDiscountCode> UserDiscountCodes = UserDiscountCodeService.SelectAllUserDiscountCode(idUser);
		return ResponseEntity.ok(common.ReturnReponse(UserDiscountCodes, "Sellect all", "UserDiscountCode"));
	}
	@GetMapping("/sellectForOrder")
	public ResponseEntity<?> sellectForOrder(@RequestParam String idUser,@RequestParam int minimumOrderValue){
		List<UserDiscountCode> UserDiscountCodes = UserDiscountCodeService.SelectUserDiscountCode(idUser,minimumOrderValue);
		return ResponseEntity.ok(common.ReturnReponse(UserDiscountCodes, "Sellect all", "UserDiscountCode"));
	}
	@PostMapping("/insertUserDiscountCode")
	public ResponseEntity<?> insertUserDiscountCode(@RequestBody UserDiscountCode UserDiscountCode){
		return ResponseEntity.ok(common.ReturnReponse(UserDiscountCodeService.InsertUserDiscountCode(UserDiscountCode), "Insert", "UserDiscountCode"));
	}
	@PostMapping("/updateUserDiscountCode")
	public ResponseEntity<?> updateUserDiscountCode(@RequestBody UserDiscountCode UserDiscountCode){
		return ResponseEntity.ok(common.ReturnReponse(UserDiscountCodeService.UpdateUserDiscountCode(UserDiscountCode), "Update", "UserDiscountCode"));
	}
	@PostMapping("/deleteUserDiscountCode")
	public ResponseEntity<?> deleteUserDiscountCode(@RequestBody UserDiscountCode UserDiscountCode){
		return ResponseEntity.ok(common.ReturnReponse(UserDiscountCodeService.DeleteUserDiscountCode(UserDiscountCode), "Delete", "UserDiscountCode"));
	}
}
