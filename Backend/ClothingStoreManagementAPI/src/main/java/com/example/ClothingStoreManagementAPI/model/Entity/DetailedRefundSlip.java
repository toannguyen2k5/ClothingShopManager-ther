package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Time;

@Entity
@Table(name = "detailedrefundslip")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DetailedRefundSlip {

    @Id
    @Column(name = "idDetailedRefundSlip", length = 45)
    private String idDetailedRefundSlip;

    @Column(name = "idSalesSlip", length = 45, nullable = false)
    private String idSalesSlip;

    @Column(name = "idDetail", length = 45, nullable = false)
    private String idDetail;

    @Column(name = "createTime")
    private Time createTime;

    @Column(name = "updateTime")
    private Time updateTime;
    
    @Column(name = "quantity",columnDefinition = "INT UNSIGNED",nullable = false)
    private int quantity;
    
    @Column(name = "status", nullable = false)
    private boolean status;

}
