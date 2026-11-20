package com.example.ClothingStoreManagementAPI.product.model.DTO;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class CheckoutShopResult {
    private boolean needSplit;           // true = phải tách đơn
    private List<ShopOrderGroup> shopGroups;
    private double totalShipping;
    private List<String> unfulfilledProducts; // sản phẩm không shop nào đủ hàng
}