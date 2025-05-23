package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "productcategory")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductCategory {

    @Id
    @Column(name = "idCategory", length = 45)
    private String idCategory;

    @Column(name = "nameCategory", length = 100, nullable = false)
    private String nameCategory;

    @Column(name = "description", length = 255)
    private String description;

    @Column(name = "idParentCategory", length = 45)
    private String idParentCategory;
}
