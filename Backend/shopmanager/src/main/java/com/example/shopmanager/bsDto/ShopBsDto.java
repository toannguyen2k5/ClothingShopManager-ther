package com.example.shopmanager.bsDto;

import lombok.Data;

@Data
public class ShopBsDto {
    private String idShop;
    private String nameShop;
    private String address;
    private String phoneNumber;
    private String email;
    private Boolean status;
}
