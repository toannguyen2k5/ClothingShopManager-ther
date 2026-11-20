package com.example.ClothingStoreManagementAPI.product.model.DTO;
import lombok.*;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ShoppingCartDTO {
	private String idShoppingCart;
	private Integer quantity;
	private Boolean status;
}
