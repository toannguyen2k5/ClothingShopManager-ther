
package com.example.ClothingStoreManagementAPI.ai.dto;

import java.util.List;

public record EmbeddingResponse(
        List<List<Float>> embeddings,
        int dimension
) {}
