package com.example.ClothingStoreManagementAPI.ai.service.rag.embedding;

import com.example.ClothingStoreManagementAPI.ai.dto.EmbeddingRequest;
import com.example.ClothingStoreManagementAPI.ai.dto.EmbeddingResponse;
import com.example.ClothingStoreManagementAPI.ai.service.rag.embedding.EmbeddingClient;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmbeddingService {

    private static final int EXPECTED_DIMENSION = 1024;

    private final EmbeddingClient embeddingClient;

    /**
     * Embedding một văn bản.
     */
    public List<Float> embedText(String text) {

        if (text == null || text.isBlank()) {
            throw new IllegalArgumentException(
                "Text cannot be empty"
            );
        }

        List<List<Float>> embeddings = embedTexts(
            List.of(text)
        );

        return embeddings.get(0);
    }

    /**
     * Embedding nhiều văn bản.
     */
    public List<List<Float>> embedTexts(List<String> texts) {

        if (texts == null || texts.isEmpty()) {
            throw new IllegalArgumentException(
                "Texts cannot be empty"
            );
        }

        for (String text : texts) {
            if (text == null || text.isBlank()) {
                throw new IllegalArgumentException(
                    "Text cannot be blank"
                );
            }
        }

        EmbeddingRequest request = new EmbeddingRequest(texts);

        EmbeddingResponse response =
            embeddingClient.embed(request);

        if (response == null || response.embeddings() == null) {
            throw new RuntimeException(
                "Embedding service returned empty response"
            );
        }

        if (response.dimension() != EXPECTED_DIMENSION) {
            throw new RuntimeException(
                "Invalid embedding dimension: "
                + response.dimension()
            );
        }

        if (response.embeddings().size() != texts.size()) {
            throw new RuntimeException(
                "Embedding result count does not match input count"
            );
        }

        for (List<Float> vector : response.embeddings()) {

            if (vector == null ||
                vector.size() != EXPECTED_DIMENSION) {

                throw new RuntimeException(
                    "Invalid embedding vector"
                );
            }
        }

        return response.embeddings();
    }
}
