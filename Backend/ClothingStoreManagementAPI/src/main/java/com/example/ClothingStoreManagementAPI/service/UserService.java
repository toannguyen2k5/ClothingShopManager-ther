package com.example.ClothingStoreManagementAPI.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.ClothingStoreManagementAPI.repository.UserRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import com.example.ClothingStoreManagementAPI.model.Entity.Shop;
import com.example.ClothingStoreManagementAPI.model.Entity.Users;
import com.example.ClothingStoreManagementAPI.model.Enum.Role;
import com.example.ClothingStoreManagementAPI.model.DTO.*;

import java.util.*;
@Service
public class UserService {
	@Autowired
	private UserRepository UserRepository;
	@Autowired
	private Common common;
	@Autowired
	private ImageService ImageService;
	@Autowired
	private EntityManager entityManager;
	public List<ShowUserDTO> ShowAllClient(){
		try {
			Query query = entityManager.createQuery(
				    "SELECT new com.example.ClothingStoreManagementAPI.model.DTO.ShowUserDTO(" +
				    "u.idUser, u.fullName, u.email, u.phoneNumber, u.address, " +
				    "u.gender, u.birthDay, u.username, " +
				    "SUM(CASE WHEN ss.deliveryStatus = true THEN 1 ELSE 0 END), " +
				    "SUM(CASE WHEN ss.deliveryStatus = false THEN 1 ELSE 0 END), " +
				    "SUM(CASE WHEN ss.deliveryStatus = true THEN ss.totalBill ELSE 0 END)) " +
				    "FROM Users u " +
				    "LEFT JOIN SalesSlip ss ON ss.idClient = u.idUser " +
				    "WHERE u.role = customer "+
				    "GROUP BY u.idUser, u.fullName, u.email, u.phoneNumber, u.address, " +
				    "u.gender, u.birthDay, u.username",
				    ShowUserDTO.class
				);
			return query.getResultList();
		}
		catch(Exception e) {
			System.out.print("SellectProduct, Error : " + e.getMessage());
			return null;
		}
	}
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
	
	public Optional<Users> getInfoUser(String idUser) {
        return UserRepository.findById(idUser);
    }
	
	public boolean InsertUsers(Users Users, List<MultipartFile> addimages) {
		try {

			String idcurrent = UserRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(Users.class);
			if(addimages != null && !addimages.isEmpty()) {
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
			if(addimages != null && !addimages.isEmpty()) {
				List<String> pathAvatar = ImageService.uploadImages(deleimages, addimages, "user", Users.getIdUser(),true);
				if(pathAvatar!=null) Users.setPathAvatar(pathAvatar.getFirst());
			}
			return UserRepository.UpdateUsers(Users.getIdUser(),Users.getUsername(),Users.getPassword(),Users.isStatus(),Users.getRole(),Users.getFullName(),
					Users.getAddress(),Users.getBirthDay(),Users.getGender(),Users.getEmail(),Users.getPhoneNumber(),Users.getPathAvatar())>0;
		}
		catch(Exception e) {
			System.out.print("UpdateColor, Error : " + e.getMessage());
			return false;
		}
	}
}