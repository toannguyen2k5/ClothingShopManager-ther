package com.example.ClothingStoreManagementAPI.model.DTO;

import jakarta.persistence.MappedSuperclass;
import lombok.*;
import com.example.ClothingStoreManagementAPI.model.Enum.Role;
@MappedSuperclass  
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserLoginDTO {
    private String idUser;
    private String fullName;
    private Role role;
    private int roleLevel;
    private String email;
    private String Avatar;
}
