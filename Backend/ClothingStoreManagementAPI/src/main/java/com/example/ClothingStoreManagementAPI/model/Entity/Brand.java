package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "brand")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Brand {

    @Id
    @Column(name = "idBrand", length = 45)
    private String idBrand;

    @Column(name = "nameBrand", length = 100, nullable = false)
    private String nameBrand;

    @Column(name = "description", length = 255)
    private String description;
}
