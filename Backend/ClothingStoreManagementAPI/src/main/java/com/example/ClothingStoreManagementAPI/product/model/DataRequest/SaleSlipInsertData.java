package com.example.ClothingStoreManagementAPI.product.model.DataRequest;
import com.example.ClothingStoreManagementAPI.product.model.Entity.SalesSlip;
import java.util.List;
import lombok.*;
import java.time.LocalDate;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SaleSlipInsertData {
	private SalesSlip SalesSlip;
	private List<ShopDeliveryData> ShopDeliveryData;
}
