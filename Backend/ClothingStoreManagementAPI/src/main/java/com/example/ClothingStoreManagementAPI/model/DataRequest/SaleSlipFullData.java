package com.example.ClothingStoreManagementAPI.model.DataRequest;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class SaleSlipFullData {
	private SalesSlipData salesSlipData;
	private List<ShopDeliveryData> shopDeliveryData;
}
