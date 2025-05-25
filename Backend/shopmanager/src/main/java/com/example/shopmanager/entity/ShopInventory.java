package com.example.shopmanager.entity;

import java.io.Serializable;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "shop_inventory")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class ShopInventory {
	@EmbeddedId
	private ShopInventoryKey id;

	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("idShop") // map id.idShop to shop.idShop
	@JoinColumn(name = "id_shop")
	private Shop shop;

	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("idVariant")
	@JoinColumn(name = "id_variant")
	private ProductVariant variant;

	@Column(name = "quantity")
	private Integer quantity;
}

@Embeddable
class ShopInventoryKey implements Serializable {
	@Column(name = "id_shop")
	private String idShop;

	@Column(name = "id_variant")
	private String idVariant;

	// Constructors
	public ShopInventoryKey() {
	}

	public ShopInventoryKey(String idShop, String idVariant) {
		this.idShop = idShop;
		this.idVariant = idVariant;
	}

	// Getters & Setters

	// equals() & hashCode() phải chuẩn
	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (!(o instanceof ShopInventoryKey))
			return false;
		ShopInventoryKey that = (ShopInventoryKey) o;
		return Objects.equals(idShop, that.idShop) && Objects.equals(idVariant, that.idVariant);
	}

	@Override
	public int hashCode() {
		return Objects.hash(idShop, idVariant);
	}
}
