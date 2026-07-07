package com.example.ClothingStoreManagementAPI.model.DTO;

import java.time.LocalDate;

import com.example.ClothingStoreManagementAPI.model.Enum.Role;

import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@MappedSuperclass  
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserAdminDto {
	private String idUser;
	private String username;
	private Boolean status;
	private Role role;
	private String fullName;
	private String address;
	private LocalDate birthDay;
	private Boolean gender;
	private String email;
	private String phoneNumber;
}
