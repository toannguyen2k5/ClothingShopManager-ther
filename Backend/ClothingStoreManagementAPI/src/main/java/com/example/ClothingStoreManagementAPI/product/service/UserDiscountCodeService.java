package com.example.ClothingStoreManagementAPI.product.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.product.repository.*;
import com.example.ClothingStoreManagementAPI.product.model.DTO.UserDiscountCodeDTO;
import com.example.ClothingStoreManagementAPI.product.model.Entity.UserDiscountCode;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Users;

import java.util.*;
@Service
public class UserDiscountCodeService {
	@Autowired
	private UserDiscountCodeRepository UserDiscountCodeRepository;
	@Autowired
	private UserRepository UserRepository;
	@Autowired
	private Common common;
	public List<UserDiscountCodeDTO> SelectAllUserDiscountCode(){
		try {
			List<UserDiscountCode> UserDiscountCodes = UserDiscountCodeRepository.findAll();
			List<UserDiscountCodeDTO> result = new ArrayList<>();
			for(UserDiscountCode UserDiscountCode : UserDiscountCodes) {
				String nameCreater = UserRepository.SellectFullName(UserDiscountCode.getIdCreater());
				String nameUser = UserRepository.SellectFullName(UserDiscountCode.getIdUser());
				result.add(new UserDiscountCodeDTO(UserDiscountCode.getDiscountCode(),UserDiscountCode.getCode(),nameCreater,UserDiscountCode.getIdUser(),nameUser
						,UserDiscountCode.getDiscount(),UserDiscountCode.getType(),UserDiscountCode.getMaxDiscountValue(),
						UserDiscountCode.getMinimumOrderValue(),UserDiscountCode.getExpiry()));
			}
			return result;
		}
		catch(Exception e) {
			System.out.print("SelectAllUserDiscountCode, Error : " + e.getMessage());
			return null;
		}
	}
	public List<UserDiscountCode> SelectDiscodeByIdUser(String idUser){
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
			return UserDiscountCodeRepository.UpdateUserDiscountCode(UserDiscountCode.getDiscountCode(),UserDiscountCode.getCode(),
					UserDiscountCode.getIdUser(),UserDiscountCode.getDiscount(),UserDiscountCode.getType(),
					UserDiscountCode.getMaxDiscountValue(),UserDiscountCode.getMinimumOrderValue(),UserDiscountCode.getExpiry())>0;
		}
		catch(Exception e) {
			System.out.print("UpdateUserDiscountCode, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteUserDiscountCode(String discountCode) {
		try {
			UserDiscountCodeRepository.deleteById(discountCode);
			return !UserDiscountCodeRepository.existsById(discountCode);
		}
		catch(Exception e) {
			System.out.print("DeleteUserDiscountCode, Error : " + e.getMessage());
			return false;
		}
	}
}
