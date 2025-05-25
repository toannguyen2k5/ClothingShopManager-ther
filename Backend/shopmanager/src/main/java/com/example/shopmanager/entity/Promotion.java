package com.example.shopmanager.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

import com.example.shopmanager.enums.DiscountType;
import com.fasterxml.jackson.annotation.JsonBackReference;

import java.math.BigDecimal;

@Entity
@Table(name = "promotions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Promotion {
	@Id
	@Column(name = "id_promotion")
	private String idPromotion;

    @Column(name = "id_shop", insertable = false, updatable = false)
	private String idShop;

    @Column(name = "id_variant", insertable = false, updatable = false)
	private String idVariant;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_shop", nullable = false)
	private Shop shop;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_variant")
	private ProductVariant variant;

	@Enumerated(EnumType.STRING)
	@Column(name = "discount_type")
	private DiscountType discountType;


	@Column(name = "discount_value")
	private BigDecimal discountValue;

	@Column(name = "start_date")
	private LocalDate startDate;

	@Column(name = "end_date")
	private LocalDate endDate;
}
