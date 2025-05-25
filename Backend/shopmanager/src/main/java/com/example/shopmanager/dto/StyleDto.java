package com.example.shopmanager.dto;

import java.util.List;

import com.example.shopmanager.bsDto.ProductVariantBsDto;
import com.example.shopmanager.bsDto.StyleBsDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StyleDto extends StyleBsDto {
    private List<ProductVariantBsDto> variants;
}
