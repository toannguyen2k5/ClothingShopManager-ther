package com.example.shopmanager.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "purchase_slip")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class PurchaseSlip {
	@Id
	@Column(name = "id_purchase_slip")
	private String idPurchaseSlip;

	@Column(name = "id_creater", insertable = false, updatable = false)
	private String idCreater;

	@Column(name = "id_supplier", insertable = false, updatable = false)
	private String idSupplier;

	@Column(name = "id_status_editor", insertable = false, updatable = false)
	private String idStatusEditor;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_creater", nullable = false)
	private User creater;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_supplier", nullable = false)
	private Supplier supplier;

	@Column(name = "day_create")
	private LocalDateTime dayCreate;

	@Column(name = "total_bill")
	private BigDecimal totalBill;

	@Column(name = "approve_status")
	private Boolean approveStatus;

	@Column(name = "status_receive")
	private Boolean statusReceive;

	@Column(name = "status_update_date")
	private LocalDate statusUpdateDate;

	@ManyToOne(fetch = FetchType.LAZY)

	@JoinColumn(name = "id_status_editor")
	private User statusEditor;

	@OneToMany(mappedBy = "purchaseSlip", cascade = CascadeType.ALL, orphanRemoval = true)

	private List<PurchaseDetail> details = new ArrayList<>();
}
