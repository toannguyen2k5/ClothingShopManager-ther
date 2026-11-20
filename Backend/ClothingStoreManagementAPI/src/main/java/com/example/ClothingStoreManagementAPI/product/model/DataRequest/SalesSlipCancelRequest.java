package com.example.ClothingStoreManagementAPI.product.model.DataRequest;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SalesSlipCancelRequest {
	private String idSalesSlip;
	private String idClient;
}
