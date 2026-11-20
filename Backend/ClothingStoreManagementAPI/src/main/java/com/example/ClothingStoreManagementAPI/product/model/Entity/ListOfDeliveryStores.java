package com.example.ClothingStoreManagementAPI.product.model.Entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "listofdeliverystores")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ListOfDeliveryStores {

    @Id
    @Column(name = "idList", length = 45)
    private String idList;

    @Column(name = "idSalesSlip", length = 45, nullable = false)
    private String idSalesSlip;

    @Column(name = "idShop", length = 45, nullable = false)
    private String idShop;

    @Column(name = "status", nullable = false)
    private boolean status;
}
