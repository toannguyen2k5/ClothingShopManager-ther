package com.example.ClothingStoreManagementAPI.product.model.DataRequest;
import com.example.ClothingStoreManagementAPI.product.model.Entity.DetailPurchaseSlip;
import com.example.ClothingStoreManagementAPI.product.model.Entity.ListOfReceivingStores;
import lombok.*;
import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PucharSlipUpdate {
	private ListOfReceivingStores listOfReceivingStores;
    private List<DetailPurchaseSlip> detailPurchaseSlip;
}
