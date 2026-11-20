package com.example.ClothingStoreManagementAPI.product.model.Entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "listwarehouseincharge")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ListWarehouseInCharge {

    @Id
    @Column(name = "idList", length = 45)
    private String idList;

    @Column(name = "idStaff", length = 45, nullable = false)
    private String idStaff;

    @Column(name = "idShop", length = 45, nullable = false)
    private String idShop;

    @Column(name = "cccdNumber", length = 45, nullable = true)
    private String cccdNumber;

    @Column(name = "motorbikeNumber", length = 45, nullable = true)
    private String motorbikeNumber;
}
