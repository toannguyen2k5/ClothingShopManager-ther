package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity
@Table(name = "userdiscountcode")  // Tên bảng viết thường
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDiscountCode {

    @Id
    @Column(name="discountCode",length = 45, nullable = false)
    private String discountCode;  // PK
    
    @Column(name="idUser",length = 45, nullable = false)
    private String idUser;  // PK
    
    @Column(name="discountOrPrice")
    private double discountOrPrice;

    @Column(name = "minimumOrderValue",columnDefinition = "INT UNSIGNED",nullable = false)
    private int minimumOrderValue;

    @Column(name="expiry",nullable = false)
    private LocalDateTime expiry;
}
