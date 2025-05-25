package com.example.shopmanager.bsDto;


import java.math.BigDecimal;

import lombok.Data;
@Data
public class PurchaseSlipDetailBsDto {
    private String idPurchaseSlipDetail;
    private String idPurchaseSlip;
    private String idVariant;
    private Integer quantity;
    private BigDecimal purchasePrice;
}