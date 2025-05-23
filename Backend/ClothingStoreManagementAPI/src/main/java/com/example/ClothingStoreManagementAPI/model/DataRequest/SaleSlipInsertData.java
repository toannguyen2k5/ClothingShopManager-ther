package com.example.ClothingStoreManagementAPI.model.DataRequest;
import com.example.ClothingStoreManagementAPI.model.Entity.SalesSlip;
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
