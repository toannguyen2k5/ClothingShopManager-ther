package com.example.ClothingStoreManagementAPI.product.model.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class InventoryDTO {
	private String idShop;
	private String nameShop;
	private Integer quantity;
	private String address;
}
