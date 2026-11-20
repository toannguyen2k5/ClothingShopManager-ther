
package com.example.ClothingStoreManagementAPI.ai.dto;

import com.example.ClothingStoreManagementAPI.product.model.DTO.DetailProductDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class RetrievedProductDTO {

    private DetailProductDTO product;

    // Điểm tương đồng do Qdrant trả về
    private double score;
}
