
package com.example.ClothingStoreManagementAPI.ai.dto;

import java.util.List;

public record EmbeddingRequest(
        List<String> texts
) {}
