package com.example.ClothingStoreManagementAPI.product.model.Entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "detailsalesslip")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DetailSalesSlip {

    @Id
    @Column(name = "idDetail", length = 45)
    private String idDetail;

    @Column(name = "idList", length = 45, nullable = false)
    private String idList;

    @Column(name = "idDetailProduct", length = 45, nullable = false)
    private String idDetailProduct;

    @Column(name = "quantity",columnDefinition = "INT UNSIGNED",nullable = false)
    private int quantity;

    @Column(name = "price",columnDefinition = "INT UNSIGNED",nullable = false)
    private int price;
}
