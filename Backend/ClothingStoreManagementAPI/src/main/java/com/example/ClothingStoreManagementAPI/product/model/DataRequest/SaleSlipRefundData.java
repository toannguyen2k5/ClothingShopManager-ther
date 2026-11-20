package com.example.ClothingStoreManagementAPI.product.model.DataRequest;
import com.example.ClothingStoreManagementAPI.product.model.Entity.*;
import java.util.List;
import lombok.*;
import java.time.LocalDate;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SaleSlipRefundData {
	private SalesSlip SalesSlip;
	private List<DetailedRefundSlip> DetailedRefundSlip;
}
