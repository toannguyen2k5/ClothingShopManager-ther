package com.example.ClothingStoreManagementAPI.model.DataRequest;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CheckInforValidData {
	private String idProduct;
	private String idShop;
	private String idColor;
	private String idSize;
}
