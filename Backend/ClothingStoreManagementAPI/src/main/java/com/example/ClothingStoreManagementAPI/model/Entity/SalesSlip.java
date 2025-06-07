package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import java.time.LocalDate;
import lombok.*;

@Entity
@Table(name = "salesslip")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SalesSlip {

    @Id
    @Column(name = "idSalesSlip", length = 45)
    private String idSalesSlip;

    @Column(name = "idCreater", length = 45,nullable = false)
    private String idCreater;

    @Column(name = "idClient", length = 45,nullable = false)
    private String idClient;

    @Column(name = "createDate")
    private LocalDate  createDate;

    @Column(name = "deliveryAddress", length = 255)
    private String deliveryAddress;

    @Column(name = "totalBill",columnDefinition = "INT UNSIGNED",nullable = false)
    private int totalBill;
    
    @Column(name = "shippingFee",nullable = false)
    private int shippingFee;
    
    @Column(name = "deliveryStatus")
    private String deliveryStatus;

    @Column(name = "note", length = 255)
    private String note;

    @Column(name = "evaluate",nullable = true)
    private Integer evaluate;
    
    @Column(name = "refundStatus",nullable = true)
    private Boolean refundStatus;
    
    @Column(name = "proof", length = 255)
    private String proof;
    
    @Column(name = "discountCode", length = 45)
    private String discountCode;
    
    @Column(name = "deliveryDate")
    private LocalDate deliveryDate;
    
    @Column(name = "comment", length = 500)
    private String comment;
}
