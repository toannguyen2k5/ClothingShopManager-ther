package com.example.shopmanager.dto;

import lombok.*;
import java.math.BigDecimal;

import com.example.shopmanager.bsDto.ProductBsDto;
import com.example.shopmanager.bsDto.SalesSlipBsDto;
import com.example.shopmanager.bsDto.SalesSlipDetailBsDto;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SalesDetailDto extends SalesSlipDetailBsDto {
    private SalesSlipBsDto salesSlip;
    private ProductBsDto product;
}
