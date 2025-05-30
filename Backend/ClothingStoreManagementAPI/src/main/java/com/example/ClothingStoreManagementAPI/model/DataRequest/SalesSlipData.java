package com.example.ClothingStoreManagementAPI.model.DataRequest;
import lombok.*;
import java.time.LocalDate;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SalesSlipData {
	private String idCreater;
	private String idClient;
	private LocalDate  createDate;
	private String	deliveryAddress;
	private int	totalBill;
	private int shippingFee;
	private String note;
	private String	discountcode;
}
