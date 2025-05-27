package com.example.ClothingStoreManagementAPI.model.DTO;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@Data
public class UsersRequestDto {
    private String idUser;
    private String username;
    private String password;
    private boolean status;
    private String role;
    private String fullName;
    private String address;
    private LocalDate birthDay;
    private boolean gender;
    private String email;
    private String phoneNumber;
    private MultipartFile avatar;
}
