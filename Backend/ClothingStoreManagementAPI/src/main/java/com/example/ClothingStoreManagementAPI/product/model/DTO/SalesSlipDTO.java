package com.example.ClothingStoreManagementAPI.product.model.DTO;
import lombok.*;
import java.time.LocalDate;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SalesSlipDTO {
	private String idSalesSlip;
	private String nameCreate;
	public String nameClient;
	private LocalDate createDate;
	private String deliveryAddress;
	private Integer shippingFee;
	private Integer totalBill;
	private String deliveryStatus;
}
