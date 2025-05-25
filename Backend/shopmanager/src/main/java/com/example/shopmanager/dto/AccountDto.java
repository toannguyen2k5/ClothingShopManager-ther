package com.example.shopmanager.dto;

import java.time.LocalDate;

import com.example.shopmanager.enums.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountDto {
    private String idUser;
    private String username;
    private String password;
    private Boolean status;
    private Role role;
    private int roleLevel;
    private String fullName;
    private String address;
    private LocalDate birthday;
    private Boolean gender;
    private String email;
    private String phoneNumber;
    private String pathAvatar;
}
