package com.example.ClothingStoreManagementAPI.model.DTO;
import lombok.*;
import java.time.LocalDate;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SalesSlipDTO {
	private String idSalesSlip;
	private String fullname;
	private String phoneNumber;
	private LocalDate createDate;
	private boolean deliveryStatus;
}
