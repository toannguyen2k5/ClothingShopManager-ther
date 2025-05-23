package com.example.ClothingStoreManagementAPI.model.DataRequest;
import com.example.ClothingStoreManagementAPI.model.DataRequest.*;
import lombok.*;
import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SaleSlipFullData {
	private SalesSlipData SalesSlipData;
	private List<ShopDeliveryData> ShopDeliveryData;
}
