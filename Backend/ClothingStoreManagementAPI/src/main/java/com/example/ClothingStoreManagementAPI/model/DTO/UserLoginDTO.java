package com.example.ClothingStoreManagementAPI.model.DTO;

import jakarta.persistence.MappedSuperclass;
import lombok.*;

@MappedSuperclass  
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserLoginDTO {
    private String idUser;
    private String fullName;
    private String idRole;
    private String email;
    private String Avatar;
}
