package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "shoppingcart")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ShoppingCart {
    
    @Id
    @Column(name = "idShoppingCart", length = 45)
    private String idShoppingCart;

    @Column(name = "idUser", length = 45, nullable = false)
    private String idUser;

    @Column(name = "idDetail", length = 45, nullable = false)
    private String idDetail;

    @Column(name = "quantity",columnDefinition = "INT UNSIGNED",nullable = false)
    private int quantity;
    
    @Column(name = "status", nullable = false)
    private boolean status;
}
