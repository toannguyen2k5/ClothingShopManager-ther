package com.example.shopmanager.dto;

import com.example.shopmanager.bsDto.ProductVariantBsDto;
import com.example.shopmanager.bsDto.ShopBsDto;
import com.example.shopmanager.bsDto.ShoppingCartBsDto;
import com.example.shopmanager.bsDto.UserBsDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ShoppingCartDto extends ShoppingCartBsDto {
    private UserBsDto user;
    private ShopBsDto shop;
    private ProductVariantBsDto variant;
}

