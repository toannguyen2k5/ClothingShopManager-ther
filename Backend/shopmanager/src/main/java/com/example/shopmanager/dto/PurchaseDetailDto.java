package com.example.shopmanager.dto;

import lombok.*;
import java.math.BigDecimal;

import com.example.shopmanager.bsDto.ProductBsDto;
import com.example.shopmanager.bsDto.PurchaseSlipBsDto;
import com.example.shopmanager.bsDto.PurchaseSlipDetailBsDto;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseDetailDto extends PurchaseSlipDetailBsDto {
    private PurchaseSlipBsDto purchaseSlip;
    private ProductBsDto product;
}
