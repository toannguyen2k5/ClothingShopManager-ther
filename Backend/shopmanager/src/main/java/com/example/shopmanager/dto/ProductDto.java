package com.example.shopmanager.dto;

import lombok.*;
import java.util.List;

import com.example.shopmanager.bsDto.BrandBsDto;
import com.example.shopmanager.bsDto.CategoryBsDto;
import com.example.shopmanager.bsDto.ProductBsDto;
import com.example.shopmanager.bsDto.ProductVariantBsDto;
import com.example.shopmanager.bsDto.PurchaseSlipDetailBsDto;
import com.example.shopmanager.bsDto.SalesSlipDetailBsDto;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto extends ProductBsDto {
    // N-1
    private BrandBsDto brand;
    private CategoryBsDto category;
    private Boolean status;
    // 1-N
    private List<ProductVariantBsDto> productVariants;
    private List<PurchaseSlipDetailBsDto> purchaseDetails;
    private List<SalesSlipDetailBsDto> salesDetails;
}
