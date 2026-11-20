package com.example.ClothingStoreManagementAPI.product.model.DTO;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDiscountCodeDTO {
    private String discountCode;  
    private String code;
    private String nameCreater;
    private String idUser;
    private String nameUser;
    private Integer discountOrPrice;
    private String type;
    private Integer maxDiscountValue;
    private Integer minimumOrderValue;
    private LocalDate expiry;
}
