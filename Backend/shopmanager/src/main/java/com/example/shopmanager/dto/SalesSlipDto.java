package com.example.shopmanager.dto;

import java.util.List;

import com.example.shopmanager.bsDto.SalesSlipBsDto;
import com.example.shopmanager.bsDto.SalesSlipDetailBsDto;
import com.example.shopmanager.bsDto.UserBsDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SalesSlipDto extends SalesSlipBsDto {
    private UserBsDto creater;
    private UserBsDto deliverer;
    private UserBsDto client;
    private List<SalesSlipDetailBsDto> details;
}

