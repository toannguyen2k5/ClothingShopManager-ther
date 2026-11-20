package com.example.ClothingStoreManagementAPI.product.model.DataRequest;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartData {
	private String idDetail;
	private String productName;
	private int quantity;
	private int price;
}