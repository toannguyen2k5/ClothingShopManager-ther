package com.example.shopmanager.bsDto;


import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.Data;
@Data
public class PurchaseSlipBsDto {
    private String idPurchaseSlip;
    private String idCreater;
    private String idSupplier;
    private String idStatusEditor;
    private LocalDateTime dayCreate;
    private LocalDate statusUpdateDate;
    private BigDecimal totalBill;
    private Boolean approveStatus;
    private Boolean statusReceive;
}