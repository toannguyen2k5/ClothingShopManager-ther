package com.example.ClothingStoreManagementAPI.product.model.Entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "productimage")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductImage {

    @Id
    @Column(name = "idImage", length = 45)
    private String idImage;

    @Column(name = "idProduct", length = 45, nullable = false)
    private String idProduct;

    @Column(name = "path", length = 255, nullable = false)
    private String path;
    
    @Column(name = "isMain", nullable = false)
    private boolean isMain;
}
