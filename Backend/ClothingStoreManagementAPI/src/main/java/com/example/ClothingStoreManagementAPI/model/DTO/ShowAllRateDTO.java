package com.example.ClothingStoreManagementAPI.model.DTO;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ShowAllRateDTO {
	private String idSalesSlip;
	private String nameClient;
	private LocalDate  createDate;
	private String deliveryAddress;
	private Integer evaluate;
	private String comment;
}
