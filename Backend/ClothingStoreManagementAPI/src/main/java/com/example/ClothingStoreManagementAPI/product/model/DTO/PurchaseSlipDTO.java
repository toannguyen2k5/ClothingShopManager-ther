package com.example.ClothingStoreManagementAPI.product.model.DTO;
import java.time.LocalDate;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseSlipDTO {
	private String idPurchaseSlip;
	private String nameCreater;
    private String nameSupplier;
    private LocalDate dayCreate;
    private Integer totalBill;
    private String approveStatus;
    private LocalDate statusUpdateDate;
    private String nameStatusEditor;
    private Boolean statusReceive;
}
