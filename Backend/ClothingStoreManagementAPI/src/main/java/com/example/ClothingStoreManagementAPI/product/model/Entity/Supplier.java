package com.example.ClothingStoreManagementAPI.product.model.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "supplier")  // Tên bảng viết thường
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Supplier {

    @Id
    @Column(name ="idSupplier",length = 45)
    private String idSupplier;  // PK

    @Column(name ="nameSupplier",length = 100, nullable = false)
    private String nameSupplier;

    @Column(name ="contactName",length = 100)
    private String contactName;

    @Column(name ="phoneNumber",length = 45)
    private String phoneNumber;

    @Column(name ="email",length = 45)
    private String email;

    @Column(name ="address",length = 255)
    private String address;

    @Column(name ="status",nullable = false)
    private boolean status;  // tinyint → dùng Byte trong Java
}
