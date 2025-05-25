package com.example.shopmanager.bsDto;

import lombok.Data;

@Data
public class SupplierBsDto {
    private String idSupplier;
    private String nameSupplier;
    private String contactName;
    private String phoneNumber;
    private String email;
    private String address;
    private Boolean status;
}
