package com.example.ClothingStoreManagementAPI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.model.DTO.ShowUserDTO;
import com.example.ClothingStoreManagementAPI.model.DTO.UsersRequestDto;
import com.example.ClothingStoreManagementAPI.model.Entity.Users;
import com.example.ClothingStoreManagementAPI.model.Enum.Role;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Users")
public class UserController {
	@Autowired
	private UserService UsersService;
	@Autowired
	private Common common;

	@GetMapping("/ShowAllClient")
	public ResponseEntity<?> ShowClient() {
		List<ShowUserDTO> Userss = UsersService.ShowAllClient();
		return ResponseEntity.ok(common.ReturnReponse(Userss, "Sellect", "Users"));
	}

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
		user.setStatus(request.getStatus());
		user.setRole(Role.valueOf(request.getRole()));
		user.setFullName(request.getFullName());
		user.setAddress(request.getAddress());
		user.setBirthDay(request.getBirthDay());
		user.setGender(request.getGender());
		user.setEmail(request.getEmail());
		user.setPhoneNumber(request.getPhoneNumber());

		boolean result = UsersService.InsertUsers(user,
				request.getAvatar() != null ? List.of(request.getAvatar()) : Collections.emptyList());
		return ResponseEntity.ok(common.ReturnReponse(result, "Insert", "Users"));
	}

	@PutMapping("/{id}/status")
	public ResponseEntity<?> updateUserStatus(@PathVariable("id") String idUser,
			@RequestParam("status") boolean status) {

		boolean updated = UsersService.updateUserStatus(idUser, status);
		if (updated)
			return ResponseEntity
					.ok(common.ReturnReponse((status ? "Mở " : "") + "Khóa Tài Khoản Thành Công", null, null));
		else
			return ResponseEntity.ok(common.ReturnReponse(null, null, null));
	}

	@PostMapping("/insertUsers")
	public ResponseEntity<?> InsertUsers(@RequestBody Users Users, @RequestParam List<MultipartFile> addimages) {
		return ResponseEntity.ok(common.ReturnReponse(UsersService.InsertUsers(Users, addimages), "Insert", "Users"));
	}

	@PostMapping("/insertUser")
	public ResponseEntity<?> InsertUsers(@RequestBody Users Users) {
		return ResponseEntity.ok(common.ReturnReponse(UsersService.InsertUsers(Users, null), "Insert", "Users"));
	}

	@PostMapping("/UpdateUsers")
	public ResponseEntity<?> UpdateUsers(
	        @RequestPart("Users") Users users,
	        @RequestParam(required = false) HashMap<String, String> deleimages,
	        @RequestParam(required = false) List<MultipartFile> addimages) {
	    return ResponseEntity.ok(common.ReturnReponse(
	            UsersService.UpdateUsers(users, deleimages, addimages), "Update", "Users"));
	}

	@PostMapping("/UpdateUser")
	public ResponseEntity<?> UpdateUsers(@RequestBody Users Users) {
		return ResponseEntity.ok(common.ReturnReponse(UsersService.UpdateUsers(Users, null, null), "Update", "Users"));
	}

	@PutMapping("{id}/getInfo")
	public ResponseEntity<?> getInfoUser(@PathVariable("id") String idUser) {
		Optional<Users> user = UsersService.getInfoUser(idUser);
		return ResponseEntity.ok(common.ReturnReponse(user, "Get", "InforUser"));
	}
}
