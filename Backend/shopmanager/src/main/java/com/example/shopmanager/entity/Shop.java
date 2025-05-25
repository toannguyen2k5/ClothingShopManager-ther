package com.example.shopmanager.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "shops")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Shop {
	@Id
	@Column(name = "id_shop")
	private String idShop;

	@Column(name = "name_shop", nullable = false, columnDefinition = "TEXT")
	private String nameShop;


	@Column(name = "address", columnDefinition = "TEXT")
	private String address;

	@Column(name = "phone_number")
	private String phoneNumber;

	@Column(name = "email")
	private String email;

	@Column(name = "status")
	private Boolean status;

	@OneToMany(mappedBy = "shop", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ShoppingCart> carts = new ArrayList<>();

	@OneToMany(mappedBy = "shop", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Promotion> promotions = new ArrayList<>();

	@OneToMany(mappedBy = "shop", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ShopInventory> inventories = new ArrayList<>();
}
