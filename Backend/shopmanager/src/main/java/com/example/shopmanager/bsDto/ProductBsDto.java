package com.example.shopmanager.bsDto;

import lombok.Data;

@Data
public class ProductBsDto {
	private String idProduct;
    private String nameProduct;
    private String description;
    private String idBrand;
    private String idCategory;
    private Boolean status;
    private String idMaterial;
}
