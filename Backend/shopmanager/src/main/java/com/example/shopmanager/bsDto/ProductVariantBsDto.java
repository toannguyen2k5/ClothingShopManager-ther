package com.example.shopmanager.bsDto;

import lombok.Data;

@Data
public class ProductVariantBsDto {
	private String idVariant;
    private String idProduct;
    private String size;
    private String idColor;
    private String idStyle;
    private String serialNumber;
}
