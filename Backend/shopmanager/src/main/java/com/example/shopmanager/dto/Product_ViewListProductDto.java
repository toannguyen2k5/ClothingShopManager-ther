package com.example.shopmanager.dto;

import java.util.List;

import com.example.shopmanager.bsDto.BrandBsDto;
import com.example.shopmanager.bsDto.CategoryBsDto;
import com.example.shopmanager.bsDto.MaterialBsDto;
import com.example.shopmanager.bsDto.ProductBsDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product_ViewListProductDto extends ProductBsDto {
    // N-1
    private BrandBsDto brand;
    private CategoryBsDto category;
    private MaterialBsDto material;
    // 1-N
    private List<ProductVariantDto> productVariants;
}
