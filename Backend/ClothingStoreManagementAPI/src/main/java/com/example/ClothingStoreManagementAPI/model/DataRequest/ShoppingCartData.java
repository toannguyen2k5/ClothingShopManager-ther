package com.example.ClothingStoreManagementAPI.model.DataRequest;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ShoppingCartData {
	private String idProduct;
	private String nameColor ;
	private String nameSize;
	private int quantity;
	private int price;
	private String seri;
}
