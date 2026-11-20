package com.example.ClothingStoreManagementAPI.product.model.DTO;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DetailPurchaseSlipDTO {
	private String idShop;
	private String nameShop;
	
	private String idProduct;
	private String nameProduct;
	private Integer price;
	private Integer quantity;
	private String color;
	private String size;
}
