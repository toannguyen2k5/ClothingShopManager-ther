package com.example.ClothingStoreManagementAPI.product.model.DataRequest;
import com.example.ClothingStoreManagementAPI.product.model.Entity.PurchaseSlip;
import com.example.ClothingStoreManagementAPI.product.model.DataRequest.ShopReceiveData;
import lombok.*;
import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PucharSlipData {
	private PurchaseSlip purchaseSlip;
    private List<ShopReceiveData> shopReceiveData;
}
