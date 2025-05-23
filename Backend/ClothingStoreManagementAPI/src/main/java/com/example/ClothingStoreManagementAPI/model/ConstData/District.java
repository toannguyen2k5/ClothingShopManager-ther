package com.example.ClothingStoreManagementAPI.model.ConstData;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "district")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class District {
	@Id
    @Column(name = "idDistrict", length = 45)
    private String idDistrict;

    @Column(name = "idProvince", length = 45)
    private String idProvince;

    @Column(name = "nameDistrict", length = 45)
    private String nameDistrict;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "latitude")
    private Double latitude;
}
