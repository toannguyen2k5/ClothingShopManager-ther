package com.example.shopmanager.bsDto;


import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.Data;
@Data
public class PromotionBsDto {
    private String idPromotion;
    private String namePromotion;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private BigDecimal discountValue;
    private Integer discountType;
    private Integer status;
}