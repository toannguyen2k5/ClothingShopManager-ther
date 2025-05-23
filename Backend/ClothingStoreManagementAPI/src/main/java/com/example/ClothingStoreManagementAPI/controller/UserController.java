package com.example.ClothingStoreManagementAPI.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.model.Entity.Users;

import java.util.HashMap;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Users")
public class UserController {
	@Autowired
	private UserService UsersService;
	@Autowired
	private Common common;
	@GetMapping("/SellectByRole")
	public ResponseEntity<?> SellectByRole(@RequestParam String idRole ){
		List<Users> Userss = UsersService.SellectByRole(idRole);
		return ResponseEntity.ok(common.ReturnReponse(Userss, "Sellect", "Users"));
	}
	@GetMapping("/sellectUsers")
	public ResponseEntity<?> SellectByRoleAndShop(@RequestParam String idRole ,@RequestParam String idShop){
		List<Users> Userss = UsersService.SellectByRoleAndShop(idRole,idShop);
		return ResponseEntity.ok(common.ReturnReponse(Userss, "Sellect", "Users"));
	}
	@PostMapping("/insertUsers")
	public ResponseEntity<?> InsertUsers(@RequestBody Users Users,@RequestParam List<MultipartFile> addimages){
		return ResponseEntity.ok(common.ReturnReponse(UsersService.InsertUsers(Users,addimages), "Insert", "Users"));
	}
	@PostMapping("/UpdateUsers")
	public ResponseEntity<?> UpdateUsers(@RequestBody Users Users,@RequestParam HashMap<String,String> deleimages,@RequestParam List<MultipartFile> addimages){
		return ResponseEntity.ok(common.ReturnReponse(UsersService.UpdateUsers(Users,deleimages,addimages), "Update", "Users"));
	}
}
