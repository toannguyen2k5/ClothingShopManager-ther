package com.example.shopmanager.dto;

import java.util.List;

import com.example.shopmanager.bsDto.BrandBsDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BrandDto extends BrandBsDto {
    private List<ProductDto> products;
    
}
