package com.example.shopmanager.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

import com.example.shopmanager.bsDto.ProductVariantBsDto;
import com.example.shopmanager.bsDto.PromotionBsDto;
import com.example.shopmanager.bsDto.ShopBsDto;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PromotionDto extends PromotionBsDto {
    private ShopBsDto shop;
    private ProductVariantBsDto variant;
}
