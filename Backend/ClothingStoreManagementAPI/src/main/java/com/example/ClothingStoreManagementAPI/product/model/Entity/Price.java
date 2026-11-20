package com.example.ClothingStoreManagementAPI.product.model.Entity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "price")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Price {

    @Id
    @Column(name = "idPrice", length = 45)
    private String idPrice;
    
    @Column(name = "idProduct")
    private String idProduct;
    
    @Column(name = "dateUpdate")
    private LocalDate dateUpdate;

    @Column(name = "price",columnDefinition = "INT UNSIGNED",nullable = false)
    private Integer price;

    @Column(name = "status", nullable = false)
    private boolean status;
}
