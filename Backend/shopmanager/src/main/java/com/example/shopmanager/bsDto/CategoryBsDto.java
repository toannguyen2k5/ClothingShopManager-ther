package com.example.shopmanager.bsDto;

import lombok.Data;

@Data
public class CategoryBsDto {
	private String idCategory;
    private String name;
    private String description;
    private String idParentCategory;
}
