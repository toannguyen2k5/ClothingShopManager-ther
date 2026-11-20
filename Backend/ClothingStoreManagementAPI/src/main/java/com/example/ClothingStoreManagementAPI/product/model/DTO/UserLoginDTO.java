package com.example.ClothingStoreManagementAPI.product.model.DTO;

import jakarta.persistence.MappedSuperclass;
import lombok.*;
import com.example.ClothingStoreManagementAPI.product.model.Enum.Role;
@MappedSuperclass  
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserLoginDTO {
    private String idUser;
    private String fullName;
    private Role role;
    private Integer roleLevel;
    private String email;
    private String Avatar;
    private String phoneNumber;
}
