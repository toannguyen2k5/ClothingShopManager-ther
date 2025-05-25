package com.example.shopmanager.dto;

import java.util.List;

import com.example.shopmanager.bsDto.ColorBsDto;
import com.example.shopmanager.bsDto.ProductVariantBsDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ColorDto extends ColorBsDto {
    private List<ProductVariantBsDto> variants;
}
