package com.example.shopmanager.bsDto;


import java.math.BigDecimal;

import lombok.Data;
@Data
public class SalesSlipDetailBsDto {
    private String idSalesSlipDetail;
    private String idSalesSlip;
    private String idVariant;
    private Integer quantity;
    private BigDecimal salePrice;
}