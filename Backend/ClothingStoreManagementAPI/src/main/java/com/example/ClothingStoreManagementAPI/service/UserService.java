package com.example.ClothingStoreManagementAPI.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.ClothingStoreManagementAPI.repository.UserRepository;
import com.example.ClothingStoreManagementAPI.model.Entity.Users;
import com.example.ClothingStoreManagementAPI.model.Enum.Role;

import java.util.*;
@Service
public class UserService {
	@Autowired
	private UserRepository UserRepository;
	@Autowired
	private Common common;
	@Autowired
	private ImageService ImageService;
	public List<Users> SellectByRole(String idRole){
		try {
			return UserRepository.SellectByRole(idRole);
		}
		catch(Exception e) {
			System.out.print("UpdateColor, Error : " + e.getMessage());
			return null;
		}
	}
	public List<Users> SellectByRoleAndShop(String idRole ,String idShop){
		try {
			return UserRepository.SellectByRoleAndShop(idRole, idShop);
		}
		catch(Exception e) {
			System.out.print("UpdateColor, Error : " + e.getMessage());
			return null;
		}
	}
	
	public boolean updateUserStatus(String idUser, boolean status) {
        return UserRepository.updateStatusById(idUser, status) > 0;
    }
	
	public boolean InsertUsers(Users Users, List<MultipartFile> addimages) {
		try {

			String idcurrent = UserRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(Users.class);
			if(!addimages.isEmpty()) {
				List<String> pathAvatar = ImageService.InserImage("upload/user/", addimages, newId, "user",true);
				if(pathAvatar!=null) Users.setPathAvatar(pathAvatar.getFirst());
			}
			
			Users.setIdUser(newId);
			UserRepository.save(Users); // thêm brand vào csdl
			UserRepository.flush();
			return UserRepository.existsById(newId); // trạng thái tồn tại của object mới
		}
		catch(Exception e) {
			System.out.print("Insert User, Error : " + e.getMessage());
			return false;
		}
	}
	public List<Users> getAllAdminsAndStaff() {
	    return UserRepository.findByRoleNot(Role.customer); // loại bỏ customer
	}
	@Transactional
	public boolean UpdateUsers(Users Users,HashMap<String,String> deleimages,List<MultipartFile> addimages) {
		try {
			List<String> pathAvatar = ImageService.uploadImages(deleimages, addimages, "user", Users.getIdUser(),true);
			if(pathAvatar!=null) Users.setPathAvatar(pathAvatar.getFirst());
			return UserRepository.UpdateUsers(Users.getIdUser(),Users.getUsername(),Users.getPassword(),Users.isStatus(),Users.getRole().toString(),Users.getFullName(),
					Users.getAddress(),Users.getBirthDay(),Users.isGender(),Users.getEmail(),Users.getPhoneNumber(),Users.getPathAvatar())>0;
		}
		catch(Exception e) {
			System.out.print("UpdateColor, Error : " + e.getMessage());
			return false;
		}
	}
}