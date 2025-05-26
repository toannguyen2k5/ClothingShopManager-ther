package com.example.shopmanager.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "prices")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Price {

	@Id
	@Column(name = "id_price")
	private String idPrice;

	@Column(name = "id_variant", insertable = false, updatable = false)
	private String idVariant;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_variant", nullable = false)
	private ProductVariant productVariant;

	@Column(name = "purchase_price", nullable = false)
	private BigDecimal purchasePrice;

	@Column(name = "sale_price", nullable = false)
	private BigDecimal salePrice;

	@Column(name = "updated_at", nullable = false)
	private LocalDateTime date;

	@Column(name = "note", columnDefinition = "TEXT")
	private String note;

	@Column(name = "updated_by", length = 100)
	private String updatedBy;

	@Column(name = "status")
	private Boolean status;
}
