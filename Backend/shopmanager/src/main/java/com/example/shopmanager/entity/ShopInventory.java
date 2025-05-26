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
