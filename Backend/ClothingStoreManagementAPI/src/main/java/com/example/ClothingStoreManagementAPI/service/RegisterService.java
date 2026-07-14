package com.example.ClothingStoreManagementAPI.service;

import com.example.ClothingStoreManagementAPI.repository.UserRepository;
import com.example.ClothingStoreManagementAPI.model.Enum.ResultStatus;
import com.example.ClothingStoreManagementAPI.model.DTO.UserRegisterDTO;
import com.example.ClothingStoreManagementAPI.model.Entity.Users;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
public class RegisterService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private Common common;
	@Transactional(readOnly = true)
	public UserRegisterDTO FindInforByPhoneNumber(String phoneNumber) {
		try {
			Users user = userRepository.findByNumberPhone(phoneNumber);
			return new UserRegisterDTO(user.getIdUser(),user.getUsername());
		}
		catch(Exception e) {
			System.out.print("FindInforByPhoneNumber , error : " + e.getMessage());
			return null;
		}
	}
	@Transactional
	public ResultStatus CreateOrUppdateInfor(Users user) {
		try {
			if(user.getIdUser() != null) {
				ResultStatus Result = userRepository.UpdateUsers(user.getIdUser(), user.isStatus(), user.getRole(), user.getFullName(),
						user.getAddress(), user.getBirthDay(), user.getGender(), user.getEmail(), user.getPhoneNumber(), user.getPathAvatar()) > 0 ?ResultStatus.none_error:ResultStatus.error;
				return Result;
			}
			else {
				if(userRepository.findByEmail(user.getEmail())==null) {
						if(userRepository.findByNameuser(user.getUsername())==null) {
							String idcurrent = userRepository.SelectMaxId();
							String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(Users.class);
							user.setIdUser(newId);
							userRepository.save(user);
							userRepository.flush();
							ResultStatus Result =  userRepository.existsById(newId) ? ResultStatus.none_error:ResultStatus.error; // trạng thái tồn tại của object mới
							return Result;
						}
						else {
							ResultStatus Result = ResultStatus.username_error;
							return Result;
						}
					}
				else {
					ResultStatus Result = ResultStatus.email_error;
					return Result;
				}
			}
		}
		catch(Exception e) {
			System.out.print("CreateOrUppdateInfor , error : " + e.getMessage());
			ResultStatus Result = ResultStatus.error;
			return Result;
		}
	}
}
