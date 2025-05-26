package com.example.shopmanager.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Product {
	@Id
	@Column(name = "id_product")
	private String idProduct;

	@Column(name = "name_product", columnDefinition = "TEXT")
	private String nameProduct;

	@Column(name = "description", columnDefinition = "TEXT")
	private String description;

	@Column(name = "id_brand", insertable = false, updatable = false)
	private String idBrand;

	@Column(name = "id_category", insertable = false, updatable = false)
	private String idCategory;

	@Column(name = "id_material", insertable = false, updatable = false)
	private String idMaterial;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_brand", nullable = false)
	private Brand brand;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_category", nullable = false)
	private Category category;

	private Boolean status;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ProductVariant> productVariants = new ArrayList<>();

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<PurchaseDetail> purchaseDetails = new ArrayList<>();

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<SalesDetail> salesDetails = new ArrayList<>();

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_material", nullable = false) // tên cột khóa ngoại
	private Material material;
}