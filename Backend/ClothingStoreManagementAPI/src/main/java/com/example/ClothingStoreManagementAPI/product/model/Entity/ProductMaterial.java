package com.example.ClothingStoreManagementAPI.product.model.Entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "productmaterial")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductMaterial {

    @Id
    @Column(name = "idMaterial", length = 45)
    private String idMaterial;

    @Column(name = "nameMaterial", length = 100, nullable = false)
    private String nameMaterial;

    @Column(name = "description", length = 255)
    private String description;
}
