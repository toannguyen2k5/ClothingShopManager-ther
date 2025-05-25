package com.example.shopmanager.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "materials")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Material {

    @Id
    @Column(name = "id_material")
    private String idMaterial;

    @Column(nullable = false)
    private String name;

    private String description;

    // (Tuỳ chọn) Quan hệ 1-n với Product, nếu muốn truy xuất ngược
    @OneToMany(mappedBy = "material")
    private List<Product> products;
}