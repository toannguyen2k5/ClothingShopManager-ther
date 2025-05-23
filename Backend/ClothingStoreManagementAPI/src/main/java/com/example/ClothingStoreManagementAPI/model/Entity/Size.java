package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "size")  // Tên bảng viết thường
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Size {

    @Id
    @Column(length = 45, nullable = false)
    private String idSize;  // PK

    @Column(name ="nameSize",length = 100, nullable = false)
    private String nameSize;

    @Column(name ="description",length = 255)
    private String description;
}
