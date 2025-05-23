package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "style")  // Tên bảng viết thường
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Style {
    @Id
    @Column(name ="idStyle",length = 45, nullable = false)
    private String idStyle;  // PK

    @Column(name ="nameStyle",length = 100, nullable = false)
    private String nameStyle;

    @Column(name ="description",length = 255)
    private String description;
}
