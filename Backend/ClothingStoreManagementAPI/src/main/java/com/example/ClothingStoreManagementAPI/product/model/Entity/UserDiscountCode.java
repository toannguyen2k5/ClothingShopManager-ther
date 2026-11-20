package com.example.ClothingStoreManagementAPI.product.model.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;

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
    
    @Column(name="code",length = 45, nullable = false)
    private String code;  // PK
    
    @Column(name="idUser",length = 45, nullable = false)
    private String idUser;  // PK
    
    @Column(name="idCreater",length = 45, nullable = false)
    private String idCreater;  // PK
    
    @Column(name="type",length = 45)
    private String type;
    
    @Column(name="discount")
    private int discount;

    @Column(name = "minimumOrderValue",columnDefinition = "INT UNSIGNED",nullable = false)
    private int minimumOrderValue;
    
    @Column(name = "maxDiscountValue")
    private int maxDiscountValue;

    @Column(name="expiry",nullable = false)
    private LocalDate expiry;
}
