package com.example.shopmanager.bsDto;

import lombok.Data;

@Data
public class ShopInventoryBsDto {
    private String idInventory;
    private String idShop;
    private String idVariant;
    private Integer quantity;
}