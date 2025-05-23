package com.example.ClothingStoreManagementAPI.model.DataRequest;
import com.example.ClothingStoreManagementAPI.model.Entity.PurchaseSlip;
import com.example.ClothingStoreManagementAPI.model.DataRequest.ShopReceiveData;
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
