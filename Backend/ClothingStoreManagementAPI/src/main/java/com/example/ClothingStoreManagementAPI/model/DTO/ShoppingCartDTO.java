package com.example.ClothingStoreManagementAPI.model.DTO;
import lombok.*;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ShoppingCartDTO {
	private String idShoppingCart;
	private int quantity;
	private boolean status;
}
