package com.example.ClothingStoreManagementAPI.ai.service.rag.embedding;

import com.example.ClothingStoreManagementAPI.ai.dto.EmbeddingRequest;
import com.example.ClothingStoreManagementAPI.ai.dto.EmbeddingResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component
public class EmbeddingClient {

    private final RestClient restClient;

    public EmbeddingClient(RestClient.Builder builder,@Value("${embedding.service.url}") String embeddingUrl) {
        this.restClient = builder
                .baseUrl(embeddingUrl)
                .build();
    }
    public EmbeddingResponse embed(EmbeddingRequest request) {
        return restClient.post()
                .uri("/embed")
                .contentType(MediaType.APPLICATION_JSON)
                .body(request)
                .retrieve()
                .body(EmbeddingResponse.class);
    }
}
