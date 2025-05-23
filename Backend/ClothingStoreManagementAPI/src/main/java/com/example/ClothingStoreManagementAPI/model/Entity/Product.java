package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
	@Id
    @Column(name = "idProduct",length = 45)
    private String idProduct;  // PK

    @Column(name = "nameProduct",length = 255, nullable = false)
    private String nameProduct;

    @Column(name = "idStyle",length = 45, nullable = false)
    private String idStyle;

    @Column(name = "idMaterial",length = 45, nullable = false)
    private String idMaterial;

    @Column(name = "idBrand",length = 45, nullable = false)
    private String idBrand;
    
    @Column(name = "idCategory",length = 45, nullable = false)
    private String idCategory;
    
    @Column(name = "status",nullable = false)
    private boolean status;

    @Column(name = "description",length = 45)
    private String description;
}
