package com.example.ClothingStoreManagementAPI.model.Entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

import com.example.ClothingStoreManagementAPI.model.Enum.Role;

@Entity
@Table(name = "users")
@Getter
@Setter
public class Users {
    
    @Id
    @Column(name = "idUser", length = 45, nullable = false)
    private String idUser;
    
    @Column(name = "username", length = 45, nullable = false, unique = true)
    private String username;
    
    @Column(name = "password", length = 45, nullable = false)
    private String password;
    
    @Column(name = "status", nullable = false)
    private boolean status;
    
	@Column(name = "role")
	@Enumerated(EnumType.STRING)
	private Role role;
    
    @Column(name = "fullName", length = 45, nullable = false)
    private String fullName;
    
    @Column(name = "address", length = 255)
    private String address;
    
    @Column(name = "birthDay")
    private LocalDate birthDay;
    
    @Column(name = "gender", nullable = false)
    private boolean gender;
    
    @Column(name = "email", length = 45, unique = true)
    private String email;
    
    @Column(name = "phoneNumber", length = 45, unique = true)
    private String phoneNumber;
    
    @Column(name = "pathAvatar", length = 255)
    private String pathAvatar;
}
