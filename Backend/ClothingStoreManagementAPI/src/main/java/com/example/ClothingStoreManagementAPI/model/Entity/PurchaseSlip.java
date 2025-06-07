package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "purchaseslip")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseSlip {

    @Id
    @Column(name = "idPurchaseSlip", length = 45)
    private String idPurchaseSlip;

    @Column(name = "idCreater", length = 45, nullable = false)
    private String idCreater;

    @Column(name = "idSupplier", length = 45, nullable = false)
    private String idSupplier;

    @Column(name = "dayCreate")
    private LocalDate dayCreate;

    @Column(name = "totalBill",columnDefinition = "INT UNSIGNED",nullable = false)
    private int totalBill;

    @Column(name = "approveStatus", nullable = false)
    private String approveStatus;

    @Column(name = "statusUpdateDate")
    private LocalDate statusUpdateDate;

    @Column(name = "idStatusEditor", length = 45)
    private String idStatusEditor;
    
    @Column(name = "statusReceive",nullable = false)
    private boolean statusReceive;
}
