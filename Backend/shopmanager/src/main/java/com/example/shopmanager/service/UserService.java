package com.example.shopmanager.service;

import java.util.*;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shopmanager.dto.AccountDto;
import com.example.shopmanager.dto.UserDto;
import com.example.shopmanager.entity.Product;
import com.example.shopmanager.entity.User;
import com.example.shopmanager.enums.Role;
import com.example.shopmanager.repository.JdbcManager;
import com.example.shopmanager.repository.SqlBuilder;
import com.example.shopmanager.repository.SqlRepositoryBuilder;
import com.example.shopmanager.repository.UserRepository;
import com.example.shopmanager.util.CommonUtil;
import com.example.shopmanager.util.DepthNullifierUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	private final ModelMapper mapper;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private SqlRepositoryBuilder<User> sqlRepositoryBuilder;

	@Autowired
	private SqlBuilder<User> sqlBuilder;

	public List<User> getAllUsers() {
		List<User> list = userRepository.findAll();
		return list;
	}

	public Optional<User> getUserById(String id) {
		return userRepository.findById(id);
	}

	public Role getRoleByIdUser(String idUser) {
		return userRepository.findById(idUser).map(User::getRole).orElse(null); // hoặc throw exception nếu cần
	}

	public Optional<AccountDto> findByUsername(String username) {
		Map<String, Object> paramUsername = new HashMap<>();
		paramUsername.put("username", username);

		Map<String, Object> paramEmail = new HashMap<>();
		paramEmail.put("email", username);

		User users = JdbcManager.from(User.class).whereGroup("e.username = :username", paramUsername)
				.orWhereGroup("e.email = :email", paramEmail).getSingleResult();
		AccountDto accountDto = CommonUtil.convertToDto(users, AccountDto.class);
		accountDto.setRoleLevel(accountDto.getRole().getLevel());
		return Optional.ofNullable(accountDto);
	}

	public Optional<User> findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	public boolean existsByUsername(String username) {
		return userRepository.findByUsername(username).isPresent();
	}

	public User createUser(User user) {
		return userRepository.save(user);
	}

	public Optional<User> updateUser(String id, User updatedUser) {
		return userRepository.findById(id).map(existingUser -> {
			existingUser.setUsername(updatedUser.getUsername());
			existingUser.setPassword(updatedUser.getPassword());
			existingUser.setStatus(updatedUser.getStatus());
			existingUser.setRole(updatedUser.getRole());
			existingUser.setFullName(updatedUser.getFullName());
			existingUser.setAddress(updatedUser.getAddress());
			existingUser.setBirthDay(updatedUser.getBirthDay());
			existingUser.setGender(updatedUser.getGender());
			existingUser.setEmail(updatedUser.getEmail());
			existingUser.setPhoneNumber(updatedUser.getPhoneNumber());
			existingUser.setPathAvatar(updatedUser.getPathAvatar());
			return userRepository.save(existingUser);
		});
	}

	public boolean deleteUser(String id) {
		return userRepository.findById(id).map(user -> {
			userRepository.delete(user);
			return true;
		}).orElse(false);
	}
}
