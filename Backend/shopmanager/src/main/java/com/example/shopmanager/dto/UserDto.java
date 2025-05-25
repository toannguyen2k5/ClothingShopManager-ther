package com.example.shopmanager.dto;

import java.util.List;

import com.example.shopmanager.bsDto.PurchaseSlipBsDto;
import com.example.shopmanager.bsDto.SalesSlipBsDto;
import com.example.shopmanager.bsDto.UserBsDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto extends UserBsDto {
    private List<PurchaseSlipBsDto> purchaseSlipsCreated;
    private List<SalesSlipBsDto> salesSlipsCreated;
}
