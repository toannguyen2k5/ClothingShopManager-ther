
package com.example.ClothingStoreManagementAPI.ai.service.rag.retrieval;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientResponseException;

@Service
public class QdrantService {

    private final RestClient restClient;

    private final String collectionName;
    private final int vectorSize;

    public QdrantService(
            RestClient.Builder restClientBuilder,
            @Value("${qdrant.url}") String qdrantUrl,
            @Value("${qdrant.collection}") String collectionName,
            @Value("${qdrant.vector-size}") int vectorSize) {

        this.restClient = restClientBuilder
                .baseUrl(qdrantUrl)
                .build();

        this.collectionName = collectionName;
        this.vectorSize = vectorSize;
    }

    // ==========================================
    // 1. KIỂM TRA VÀ TẠO COLLECTION
    // ==========================================

    public void createCollection() {

        try {

            restClient.get()
                    .uri("/collections/{collection}", collectionName)
                    .retrieve()
                    .toBodilessEntity();

            System.out.println(
                    "Qdrant collection already exists: " + collectionName
            );

        } catch (RestClientResponseException ex) {

            if (ex.getStatusCode().value() != 404) {
                throw ex;
            }

            Map<String, Object> vectorConfig = Map.of(
                    "size", vectorSize,
                    "distance", "Cosine"
            );

            Map<String, Object> requestBody = Map.of(
                    "vectors", vectorConfig
            );

            restClient.put()
                    .uri("/collections/{collection}", collectionName)
                    .body(requestBody)
                    .retrieve()
                    .toBodilessEntity();

            System.out.println(
                    "Created Qdrant collection: " + collectionName
            );
        }
    }

    // ==========================================
    // 2. INSERT / UPDATE VECTOR
    // ==========================================

    public void upsertPoint(
            String productId,
            List<Double> vector,
            Map<String, Object> metadata) {

        if (productId == null || productId.isBlank()) {
            throw new IllegalArgumentException("Product ID cannot be empty");
        }

        if (vector == null || vector.size() != vectorSize) {
            throw new IllegalArgumentException(
                    "Vector dimension must be " + vectorSize
            );
        }

        // Tạo UUID ổn định từ mã sản phẩm.
        // Cùng một productId luôn tạo ra cùng một UUID.
        UUID pointId = UUID.nameUUIDFromBytes(
                productId.getBytes(StandardCharsets.UTF_8)
        );

        Map<String, Object> payload = new HashMap<>();

        if (metadata != null) {
            payload.putAll(metadata);
        }

        // Luôn lưu mã sản phẩm trong payload
        payload.put("product_id", productId);

        Map<String, Object> point = Map.of(
                "id", pointId.toString(),
                "vector", vector,
                "payload", payload
        );

        Map<String, Object> requestBody = Map.of(
                "points", List.of(point)
        );

        restClient.put()
                .uri(uriBuilder -> uriBuilder
                        .path("/collections/{collection}/points")
                        .queryParam("wait", true)
                        .build(collectionName))
                .body(requestBody)
                .retrieve()
                .toBodilessEntity();
    }

    // ==========================================
    // 3. XÓA VECTOR THEO PRODUCT ID
    // ==========================================

    public void deletePoint(String productId) {

        UUID pointId = UUID.nameUUIDFromBytes(
                productId.getBytes(StandardCharsets.UTF_8)
        );

        Map<String, Object> requestBody = Map.of(
                "points", List.of(pointId.toString())
        );

        restClient.post()
                .uri(uriBuilder -> uriBuilder
                        .path("/collections/{collection}/points/delete")
                        .queryParam("wait", true)
                        .build(collectionName))
                .body(requestBody)
                .retrieve()
                .toBodilessEntity();
    }

    // ==========================================
    // 4. TÌM KIẾM VECTOR TƯƠNG ĐỒNG
    // ==========================================

    public Map<String, Object> search(
            List<Float> queryVector,
            int limit) {

        if (queryVector == null || queryVector.size() != vectorSize) {
            throw new IllegalArgumentException(
                    "Query vector dimension must be " + vectorSize
            );
        }

        Map<String, Object> requestBody = Map.of(
                "vector", queryVector,
                "limit", limit,
                "with_payload", true,
                "with_vector", false
        );

        return restClient.post()
                .uri("/collections/{collection}/points/search", collectionName)
                .body(requestBody)
                .retrieve()
                .body(new ParameterizedTypeReference<Map<String, Object>>() {});
    }
}
