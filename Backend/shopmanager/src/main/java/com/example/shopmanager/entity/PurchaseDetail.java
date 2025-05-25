package com.example.shopmanager.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "purchase_detail")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class PurchaseDetail {
	@Id
	@JoinColumn(name = "id_purchase_detail")
	private String idPurchaseDetail;

	@Column(name = "id_purchase", insertable = false, updatable = false)
	private String idPurchase;

	@Column(name = "id_product", insertable = false, updatable = false)
	private String idProduct;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_purchase", nullable = false)
	private PurchaseSlip purchaseSlip;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_product", nullable = false)
	private Product product;

	@JoinColumn(name = "quantity")
	private Integer quantity;

	@JoinColumn(name = "price")
	private BigDecimal price;
}
