package com.example.ClothingStoreManagementAPI.product.model.Entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "color")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Color {

    @Id
    @Column(name = "idColor", length = 45)
    private String idColor;

    @Column(name = "nameColor", length = 100, nullable = false)
    private String nameColor;

    @Column(name = "description", length = 255)
    private String description;
}
