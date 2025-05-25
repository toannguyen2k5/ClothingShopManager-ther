package com.example.shopmanager.bsDto;

import lombok.Data;

@Data
public class ShoppingCartBsDto {
    private String idCart;
    private String idCustomer;
    private String idVariant;
    private Integer quantity;
}