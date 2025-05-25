package com.example.shopmanager.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
@Table(name = "sales_slip")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class SalesSlip {
	@Id
	@Column(name = "id_sales_slip")
	private String idSalesSlip;

	@Column(name = "id_creater", insertable = false, updatable = false)
	private String idCreater;

	@Column(name = "id_deliverer", insertable = false, updatable = false)
	private String idDeliverer;

	@Column(name = "id_client", insertable = false, updatable = false)
	private String idClient;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_creater", nullable = false)
	private User creater;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_deliverer")
	private User deliverer;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_client", nullable = false)
	private User client;

	@Column(name = "create_date")
	private LocalDateTime createDate;

	@Column(name = "delivery_address", columnDefinition = "TEXT")
	private String deliveryAddress;

	@Column(name = "total_bill")
	private BigDecimal totalBill;

	@Column(name = "shipping_fee")
	private BigDecimal shippingFee;

	@Column(name = "delivery_status")
	private Boolean deliveryStatus;

	@Column(name = "note", columnDefinition = "TEXT")
	private String note;

	@Column(name = "evaluate")
	private Integer evaluate;

	@Column(name = "refund_status")
	private Boolean refundStatus;

	@Column(name = "proof")
	private String proof;

	@Column(name = "discount_code")
	private String discountCode;

	@Column(name = "delivery_date")
	private LocalDate deliveryDate;

	@OneToMany(mappedBy = "salesSlip", cascade = CascadeType.ALL, orphanRemoval = true)

	private List<SalesDetail> details = new ArrayList<>();
}
