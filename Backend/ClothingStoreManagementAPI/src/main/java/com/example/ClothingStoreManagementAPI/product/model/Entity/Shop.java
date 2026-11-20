package com.example.ClothingStoreManagementAPI.product.model.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalTime;

@Entity
@Table(name = "shop")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Shop {

    @Id
    @Column(name = "idShop", length = 45, nullable = false)
    private String idShop;

    @Column(name = "nameShop", length = 100, nullable = false)
    private String nameShop;

    @Column(name = "address", length = 255, nullable = false)
    private String address;

    @Column(name = "openingTime", nullable = false)
    private LocalTime openingTime;

    @Column(name = "closingTime", nullable = false)
    private LocalTime closingTime;

    @Column(name = "status", nullable = false)
    private boolean status;
}
