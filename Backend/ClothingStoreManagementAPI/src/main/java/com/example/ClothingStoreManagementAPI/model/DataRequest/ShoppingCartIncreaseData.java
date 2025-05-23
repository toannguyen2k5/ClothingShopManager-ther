package com.example.ClothingStoreManagementAPI.model.DataRequest;
import lombok.*;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ShoppingCartIncreaseData {
	private String idUser;
	private String nameColor;
	private String nameSize;
	private String idProduct;
	private int quantity;
}
