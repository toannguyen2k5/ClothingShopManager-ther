package com.example.shopmanager.dto;

import lombok.*;
import java.util.List;

import com.example.shopmanager.bsDto.CategoryBsDto;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDto extends CategoryBsDto {
    // Quan hệ phân cấp
    private CategoryBsDto parent;
    private List<CategoryBsDto> children;
}
