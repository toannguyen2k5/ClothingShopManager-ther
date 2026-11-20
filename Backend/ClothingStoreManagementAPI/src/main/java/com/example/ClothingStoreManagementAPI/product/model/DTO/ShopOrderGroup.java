package com.example.ClothingStoreManagementAPI.product.model.DTO;
import java.util.List;

import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ShopOrderGroup {
    private String idShop;
    private String nameShop;
    private String address;
    private double distanceKm;
    private double shippingFee;
    private List<CartItemInShop> products;
}