package com.example.ClothingStoreManagementAPI.model.DataRequest;
import com.example.ClothingStoreManagementAPI.model.DataRequest.ShoppingCartData;
import lombok.*;
import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ShopReceiveData {
	private String idShop;
	private List<ShoppingCartData> shoppingCartDatas;
}
