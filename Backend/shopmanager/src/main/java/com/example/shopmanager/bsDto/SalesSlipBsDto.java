package com.example.shopmanager.bsDto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.Data;

@Data
public class SalesSlipBsDto {
	private String idSalesSlip;
	private String idCreater;
	private String idDeliverer;
	private String idShop;
	private LocalDateTime createDate;
	private String deliveryAddress;
	private BigDecimal totalBill;
	private BigDecimal shippingFee;
	private Boolean deliveryStatus;
	private String note;
	private Integer evaluate;
	private Boolean refundStatus;
	private String proof;
	private String discountCode;
	private LocalDate deliveryDate;
}