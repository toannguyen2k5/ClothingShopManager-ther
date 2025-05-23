package com.example.ClothingStoreManagementAPI.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.repository.UserDiscountCodeRepository;
import com.example.ClothingStoreManagementAPI.model.Entity.UserDiscountCode;
import com.example.ClothingStoreManagementAPI.model.Entity.Users;

import java.util.*;
@Service
public class UserDiscountCodeService {
	@Autowired
	private UserDiscountCodeRepository UserDiscountCodeRepository;
	@Autowired
	private Common common;
	public List<UserDiscountCode> SelectAllUserDiscountCode(String idUser){
		try {
			return UserDiscountCodeRepository.SellectUserDiscountCode(idUser);
		}
		catch(Exception e) {
			System.out.print("SelectAllUserDiscountCode, Error : " + e.getMessage());
			return null;
		}
	}
	public List<UserDiscountCode> SelectUserDiscountCode(String idUser, int minimumOrderValue){
		try {
			return UserDiscountCodeRepository.SellectUserDiscountCode(idUser,minimumOrderValue);
		}
		catch(Exception e) {
			System.out.print("SelectAllUserDiscountCode, Error : " + e.getMessage());
			return null;
		}
	}
	public boolean InsertUserDiscountCode(UserDiscountCode UserDiscountCode){
		try {
			String idcurrent = UserDiscountCodeRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(UserDiscountCode.class);
			UserDiscountCode.setDiscountCode(newId);
			UserDiscountCodeRepository.save(UserDiscountCode); // thêm brand vào csdl
			UserDiscountCodeRepository.flush();
			return UserDiscountCodeRepository.existsById(newId); // trạng thái tồn tại của object mới
		}
		catch(Exception e) {
			System.out.print("InsertUserDiscountCode, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean UpdateUserDiscountCode(UserDiscountCode UserDiscountCode) {
		try {
			return UserDiscountCodeRepository.UpdateUserDiscountCode(UserDiscountCode.getDiscountCode(),UserDiscountCode.getDiscountOrPrice(),
					UserDiscountCode.getMinimumOrderValue(),UserDiscountCode.getExpiry())>0;
		}
		catch(Exception e) {
			System.out.print("UpdateUserDiscountCode, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteUserDiscountCode(UserDiscountCode UserDiscountCode) {
		try {
			UserDiscountCodeRepository.delete(UserDiscountCode);
			return !UserDiscountCodeRepository.existsById(UserDiscountCode.getDiscountCode());
		}
		catch(Exception e) {
			System.out.print("DeleteUserDiscountCode, Error : " + e.getMessage());
			return false;
		}
	}
}
