package com.example.shopmanager.dto;

import lombok.*;
import java.util.List;

import com.example.shopmanager.bsDto.PromotionBsDto;
import com.example.shopmanager.bsDto.ShopBsDto;
import com.example.shopmanager.bsDto.ShopInventoryBsDto;
import com.example.shopmanager.bsDto.ShoppingCartBsDto;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ShopDto extends ShopBsDto {
    private List<ShoppingCartBsDto> carts;
    private List<PromotionBsDto> promotions;
    private List<ShopInventoryBsDto> inventories;
}
