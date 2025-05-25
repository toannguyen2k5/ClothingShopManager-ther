package com.example.shopmanager.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.example.shopmanager.bsDto.PurchaseSlipBsDto;
import com.example.shopmanager.bsDto.PurchaseSlipDetailBsDto;
import com.example.shopmanager.bsDto.SupplierBsDto;
import com.example.shopmanager.bsDto.UserBsDto;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseSlipDto extends PurchaseSlipBsDto {
    private UserBsDto creater;
    private SupplierBsDto supplier;
    private UserBsDto statusEditor;
    private List<PurchaseSlipDetailBsDto> details;
}
