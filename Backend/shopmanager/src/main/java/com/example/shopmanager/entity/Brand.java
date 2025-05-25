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
@Table(name = "brands")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Brand {
	@Id
	@Column(name = "id_brand")
	private String idBrand;

	@Column(nullable = false, columnDefinition = "TEXT")
	private String name;

	@Column(name = "description", columnDefinition = "TEXT")
	private String description;

	@OneToMany(mappedBy = "brand", cascade = CascadeType.ALL, orphanRemoval = true)

	private List<Product> products = new ArrayList<>();
}
