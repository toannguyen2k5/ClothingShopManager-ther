package com.example.shopmanager.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "suppliers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Supplier {
	@Id
	@Column(name = "id_supplier")
	private String idSupplier;

	@Column(name = "name_supplier", columnDefinition = "TEXT")
	private String nameSupplier;

	@Column(name = "contact_Name", columnDefinition = "TEXT")
	private String contactName;

	@Column(name = "phone_Number")
	private String phoneNumber;

	@Column(name = "email")
	private String email;

	@Column(name = "address", columnDefinition = "TEXT")
	private String address;

	@Column(name = "status")
	private Boolean status;

	@OneToMany(mappedBy = "supplier", cascade = CascadeType.ALL)
    
	private List<PurchaseSlip> purchaseSlips = new ArrayList<>();
}