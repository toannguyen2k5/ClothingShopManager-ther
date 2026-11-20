package com.example.ClothingStoreManagementAPI.product.service;

import com.example.ClothingStoreManagementAPI.product.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.ClothingStoreManagementAPI.product.model.DTO.UserLoginDTO;
import com.example.ClothingStoreManagementAPI.product.model.DataRequest.LoginData;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Users;

@Service
public class LoginService {
	@Autowired
	private UserRepository userRepository;
	@Transactional(readOnly = true)
	public Users IsExistAccount(LoginData user) {
		Users result = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
		if(result == null) return null;
		else return result;
	}
} 
