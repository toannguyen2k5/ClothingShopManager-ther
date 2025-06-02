package com.example.ClothingStoreManagementAPI.model.DTO;
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
    private int totalBill;
    private boolean approveStatus;
    private LocalDate statusUpdateDate;
    private String nameStatusEditor;
    private boolean statusReceive;
}
