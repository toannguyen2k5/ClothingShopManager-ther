package com.example.ClothingStoreManagementAPI.model.DTO;
import lombok.*;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ShoppingCartItemDTO {
	private String idShoppingCart;
	private String idUser;
	private String idDetail;
	private String idProduct;
	private Integer quantity;
	private Boolean status;
	private String path;
	private String nameProduct;
	private String nameSize;
	private String nameColor;
	private Float decrease;
	private Integer quantityLimit;
	private Integer price;
}
