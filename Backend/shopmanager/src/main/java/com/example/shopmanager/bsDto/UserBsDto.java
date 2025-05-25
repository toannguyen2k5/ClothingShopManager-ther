package com.example.shopmanager.bsDto;

import java.time.LocalDate;

import com.example.shopmanager.enums.Role;

import lombok.Data;
@Data
public class UserBsDto {
    private String idUser;
    private String username;
    private Boolean status;
    private Role role;
    private String fullName;
    private String address;
    private LocalDate birthday;
    private Boolean gender;
    private String email;
    private String phoneNumber;
    private String pathAvatar;
}
