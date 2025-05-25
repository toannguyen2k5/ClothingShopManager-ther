package com.example.shopmanager.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "product_variants")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class ProductVariant {
	@Id
	@Column(name = "id_variant")
	private String idVariant;

	@Column(name = "id_product", insertable = false, updatable = false)
	private String idProduct;

	@Column(name = "id_color", insertable = false, updatable = false)
	private String idColor;

	@Column(name = "id_style", insertable = false, updatable = false)
	private String idStyle;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_product", nullable = false)
	private Product product;

	@Column(length = 10)
	private String size;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_color")
	private Color color;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_style")
	private Style style;

	@Column(name = "serial_Number", unique = true)
	private String serialNumber;

	@OneToMany(mappedBy = "productVariant", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Price> prices;
}
