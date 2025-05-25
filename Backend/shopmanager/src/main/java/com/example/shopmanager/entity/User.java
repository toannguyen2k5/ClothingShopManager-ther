package com.example.shopmanager.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.example.shopmanager.enums.Role;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class User {
	@Id
	@Column(name = "id_user")
	private String idUser;

	@Column(name = "username",nullable = false, unique = true)
	private String username;

	@Column(name = "password",nullable = false)
	private String password;

	@Column(name = "status")
	private Boolean status;

	@Column(name = "role")
	@Enumerated(EnumType.STRING)
	private Role role;

	@Column(name = "full_name", columnDefinition = "TEXT")
	private String fullName;

	@Column(name = "address", columnDefinition = "TEXT")
	private String address;

	@Column(name = "birthday")
	private LocalDate birthDay;

	@Column(name = "gender")
	private Boolean gender;

	@Column(name = "email")
	private String email;

	@Column(name = "phone_number")
	private String phoneNumber;

	@Column(name = "path_avatar", columnDefinition = "TEXT")
	private String pathAvatar;

	@OneToMany(mappedBy = "creater", cascade = CascadeType.ALL)
	private List<PurchaseSlip> purchaseSlipsCreated = new ArrayList<>();

	@OneToMany(mappedBy = "creater", cascade = CascadeType.ALL)
	private List<SalesSlip> salesSlipsCreated = new ArrayList<>();
}
