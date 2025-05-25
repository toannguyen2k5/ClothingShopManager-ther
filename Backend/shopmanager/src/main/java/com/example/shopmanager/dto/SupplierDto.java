package com.example.shopmanager.dto;

import java.util.List;

import com.example.shopmanager.bsDto.PurchaseSlipBsDto;
import com.example.shopmanager.bsDto.SupplierBsDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SupplierDto extends SupplierBsDto {
    private List<PurchaseSlipBsDto> purchaseSlips;
}

