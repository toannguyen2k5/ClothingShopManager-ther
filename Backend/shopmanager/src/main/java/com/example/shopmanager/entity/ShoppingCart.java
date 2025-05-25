package com.example.shopmanager.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "shopping_cart")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class ShoppingCart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_cart")
	private String idCart;

    @Column(name = "id_user", insertable = false, updatable = false)
	private String idUser;

    @Column(name = "id_shop", insertable = false, updatable = false)
	private String idShop;

    @Column(name = "id_variant", insertable = false, updatable = false)
	private String idVariant;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_user", nullable = false)
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_shop", nullable = false)
	private Shop shop;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_variant", nullable = false)
	private ProductVariant variant;


	@Column(name = "quantity")
	private Integer quantity;


	@Column(name = "added_date")
	private LocalDateTime addedDate;
}
