package com.example.shopmanager.bsDto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.Data;
@Data
public class PriceBsDto {
    private String idPrice;
    private BigDecimal purchasePrice;
    private BigDecimal salePrice;
    private LocalDateTime updatedAt;
    private String note;
    private String updatedBy;
    private Integer status;
    private String idVariant;
}
