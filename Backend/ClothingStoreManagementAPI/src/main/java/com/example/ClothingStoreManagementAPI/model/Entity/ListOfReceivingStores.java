package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "listofreceivingstores")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ListOfReceivingStores {

    @Id
    @Column(name = "idList", length = 45)
    private String idList;

    @Column(name = "idPurchaseSlip", length = 45, nullable = false)
    private String idPurchaseSlip;

    @Column(name = "idShop", length = 45, nullable = false)
    private String idShop;

    @Column(name = "status", nullable = false)
    private boolean status;
}
