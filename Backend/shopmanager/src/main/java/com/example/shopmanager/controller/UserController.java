package com.example.shopmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.shopmanager.actionForm.UserActionForm;
import com.example.shopmanager.dto.AccountDto;
import com.example.shopmanager.dto.UserDto;
import com.example.shopmanager.entity.User;
import com.example.shopmanager.enums.Role;
import com.example.shopmanager.service.UserService;
import com.example.shopmanager.util.CommonUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private CommonUtil commonUtil;

	@GetMapping("/get-role/{idUser}")
	public ResponseEntity<HashMap> getRoleLevelByIdUser(@PathVariable String idUser) {
		Integer levelRole = userService.getRoleByIdUser(idUser).getLevel();
		return commonUtil.ReturnReponse(levelRole, null, null);
	}

	// Lấy danh sách tất cả người dùng
	@GetMapping("/get-all")
	public ResponseEntity<?> getAllUsers() {

		List<UserDto> list = new ArrayList<>();
		for (User u : userService.getAllUsers()) {
			list.add(CommonUtil.convertToDto(u, UserDto.class));
		}

		return commonUtil.ReturnReponse(list, null, null);
	}

	// Lấy thông tin người dùng theo ID
	@GetMapping("/{id}")
	public ResponseEntity<User> getUserById(@PathVariable String id) {
		return userService.getUserById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	}

	// Tạo mới người dùng
	@PostMapping
	public ResponseEntity<User> createUser(@RequestBody User user) {
		return ResponseEntity.ok(userService.createUser(user));
	}

	// Cập nhật người dùng
	@PutMapping("/{id}")
	public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User user) {
		return userService.updateUser(id, user).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	}

	// Xoá người dùng
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable String id) {
		if (userService.deleteUser(id)) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}

	// Đăng nhập
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserActionForm form) {
		Optional<AccountDto> userOpt = userService.findByUsername(form.username);
		if (userOpt.isPresent()) {
			AccountDto user = userOpt.get();
			if (user.getPassword().equals(form.password)) { // Mã hóa mật khẩu khi thực tế
				return commonUtil.ReturnReponse(user, null, null);
			}
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
	}

	// Đăng ký tài khoản
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody UserActionForm form) {
		if (userService.existsByUsername(form.username)) {
			return ResponseEntity.badRequest().body("Username already exists");
		}
		User user = new User();
		user.setIdUser(UUID.randomUUID().toString());
		user.setUsername(form.username);
		user.setPassword(form.password);
		user.setEmail(form.email);
		user.setFullName(form.fullName);
		user.setStatus(true);
		user.setRole(Role.customer);
		return ResponseEntity.ok(userService.createUser(user));
	}

	// Đổi mật khẩu
	@PostMapping("/change-password")
	public ResponseEntity<?> changePassword(@RequestBody UserActionForm form) {
		Optional<User> userOpt = userService.getUserById(form.userId);
		if (userOpt.isPresent()) {
			User user = userOpt.get();
			if (user.getPassword().equals(form.oldPassword)) {
				user.setPassword(form.password);
				userService.createUser(user);
				return ResponseEntity.ok("Password changed successfully");
			}
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Old password incorrect");
		}
		return ResponseEntity.notFound().build();
	}

	// Reset mật khẩu (ví dụ dùng email để reset)
	@PostMapping("/reset-password")
	public ResponseEntity<?> resetPassword(@RequestBody UserActionForm form) {
		Optional<User> userOpt = userService.findByEmail(form.email);
		if (userOpt.isPresent()) {
			User user = userOpt.get();
			user.setPassword(form.password);
			userService.createUser(user);
			return ResponseEntity.ok("Password reset successfully");
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email not found");
	}
}
