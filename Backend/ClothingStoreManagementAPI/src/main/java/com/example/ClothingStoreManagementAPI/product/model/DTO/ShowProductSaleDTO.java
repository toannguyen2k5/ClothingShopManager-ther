package com.example.ClothingStoreManagementAPI.product.model.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ShowProductSaleDTO {
	private String idProduct;
	private String nameProduct;
	private Integer price;
	private Float decrease;
}
