package com.example.ClothingStoreManagementAPI.model.DataRequest;
import java.util.List;
import lombok.*;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ShopDeliveryData {
	private String idShop;
	private List<CartData> shoppingCartData;
}
