package com.example.ClothingStoreManagementAPI.product.model.ConstData;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "province")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Province {
    @Id
    @Column(name = "idProvince", length = 45)
    private String idProvince;

    @Column(name = "nameProvince", length = 45)
    private String nameProvince;
}
