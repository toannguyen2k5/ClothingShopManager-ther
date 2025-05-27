package com.example.ClothingStoreManagementAPI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.model.DTO.UsersRequestDto;
import com.example.ClothingStoreManagementAPI.model.Entity.Users;
import com.example.ClothingStoreManagementAPI.model.Enum.Role;

import java.util.Collections;
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
	public ResponseEntity<?> SellectByRole(@RequestParam String idRole) {
		List<Users> Userss = UsersService.SellectByRole(idRole);
		return ResponseEntity.ok(common.ReturnReponse(Userss, "Sellect", "Users"));
	}

	@GetMapping("/getAllAdminsAndStaff")
	public ResponseEntity<?> getAllAdminsAndStaff() {
		List<Users> Userss = UsersService.getAllAdminsAndStaff();
		return ResponseEntity.ok(common.ReturnReponse(Userss, "Sellect", "Users"));
	}

	@GetMapping("/sellectUsers")
	public ResponseEntity<?> SellectByRoleAndShop(@RequestParam String idRole, @RequestParam String idShop) {
		List<Users> Userss = UsersService.SellectByRoleAndShop(idRole, idShop);
		return ResponseEntity.ok(common.ReturnReponse(Userss, "Sellect", "Users"));
	}

	@PostMapping("/insertAdmin")
	public ResponseEntity<?> insertUsers(@ModelAttribute UsersRequestDto request) {
		System.out.println(request.toString());
		Users user = new Users();
		user.setIdUser(request.getIdUser());
		user.setUsername(request.getUsername());
		user.setPassword(request.getPassword());
		user.setStatus(request.isStatus());
		user.setRole(Role.valueOf(request.getRole()));
		user.setFullName(request.getFullName());
		user.setAddress(request.getAddress());
		user.setBirthDay(request.getBirthDay());
		user.setGender(request.isGender());
		user.setEmail(request.getEmail());
		user.setPhoneNumber(request.getPhoneNumber());

		boolean result = UsersService.InsertUsers(user,
				request.getAvatar() != null ? List.of(request.getAvatar()) : Collections.emptyList());
		return ResponseEntity.ok(common.ReturnReponse(result, "Insert", "Users"));
	}

	@PostMapping("/insertUsers")
	public ResponseEntity<?> InsertUsers(@RequestBody Users Users, @RequestParam List<MultipartFile> addimages) {
		return ResponseEntity.ok(common.ReturnReponse(UsersService.InsertUsers(Users, addimages), "Insert", "Users"));
	}

	@PostMapping("/UpdateUsers")
	public ResponseEntity<?> UpdateUsers(@RequestBody Users Users, @RequestParam HashMap<String, String> deleimages,
			@RequestParam List<MultipartFile> addimages) {
		return ResponseEntity
				.ok(common.ReturnReponse(UsersService.UpdateUsers(Users, deleimages, addimages), "Update", "Users"));
	}
}
