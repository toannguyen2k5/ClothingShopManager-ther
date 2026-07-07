package com.example.ClothingStoreManagementAPI.model.DTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class CartItemInShop {
    private String idDetailProduct;
    private String productName;
    private int quantity;
    private double price;
}