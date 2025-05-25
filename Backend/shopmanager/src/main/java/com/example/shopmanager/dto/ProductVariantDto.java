package com.example.shopmanager.dto;

import java.util.List;

import com.example.shopmanager.bsDto.ColorBsDto;
import com.example.shopmanager.bsDto.PriceBsDto;
import com.example.shopmanager.bsDto.ProductBsDto;
import com.example.shopmanager.bsDto.ProductVariantBsDto;
import com.example.shopmanager.bsDto.StyleBsDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductVariantDto extends ProductVariantBsDto {
    private ProductBsDto product;
    private ColorBsDto color;
    private StyleBsDto style;
    private List<PriceBsDto> prices;
}
