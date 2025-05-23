package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "inventoryshop")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class InventoryShop {

    @Id
    @Column(name = "idList", length = 45)
    private String idList;

    @Column(name = "idShop", length = 45, nullable = false)
    private String idShop;

    @Column(name = "idDetail", length = 45, nullable = false)
    private String idDetail;

    @Column(name = "quantity",columnDefinition = "INT UNSIGNED",nullable = true)
    private Integer quantity;
}

