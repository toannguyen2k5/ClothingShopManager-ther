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
@Table(name = "sales_detail")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class SalesDetail {
	@Id
	@Column(name = "id_sales_detail")
	private String idSalesDetail;

	@Column(name = "id_sales_slip", insertable = false, updatable = false)
	private String idSalesSlip;

	@Column(name = "id_product", insertable = false, updatable = false)
	private String idProduct;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_sales_slip", nullable = false)
	private SalesSlip salesSlip;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_product", nullable = false)
	private Product product;

	@Column(name = "quantity")
	private Integer quantity;

	@Column(name = "price")
	private BigDecimal price;
}
