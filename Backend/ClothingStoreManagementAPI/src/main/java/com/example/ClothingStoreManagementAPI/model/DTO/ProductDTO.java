package com.example.ClothingStoreManagementAPI.model.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
	private String idProduct;
	private String nameProduct;
	private String nameBrand;
	private String nameCategory;
	private String nameStyle;
	private String nameMaterial;
	private Integer price;
	private Float decrease;
	private String path;
	private boolean status;
}
