package com.example.shopmanager.dto;

import com.example.shopmanager.bsDto.ProductVariantBsDto;
import com.example.shopmanager.bsDto.ShopBsDto;
import com.example.shopmanager.bsDto.ShopInventoryBsDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ShopInventoryDto extends ShopInventoryBsDto {
    private ShopBsDto shop;
    private ProductVariantBsDto variant;
}
