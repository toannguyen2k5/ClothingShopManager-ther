
package com.example.ClothingStoreManagementAPI.ai.service.rag.retrieval;

import com.example.ClothingStoreManagementAPI.ai.service.rag.embedding.EmbeddingService;
import com.example.ClothingStoreManagementAPI.ai.dto.RetrievedProductDTO;
import com.example.ClothingStoreManagementAPI.product.model.DTO.DetailProductDTO;
import com.example.ClothingStoreManagementAPI.product.repository.ProductRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class RetrievalService {

    private final EmbeddingService embeddingService;
    private final QdrantService qdrantService;
    private final ProductRepository productRepository;

    /**
     * Tìm kiếm sản phẩm theo ngữ nghĩa.
     */
    public List<RetrievedProductDTO> searchProducts(
            String question,
            int limit
    ) {

        if (question == null || question.isBlank()) {
            throw new IllegalArgumentException(
                    "Question cannot be empty"
            );
        }

        if (limit <= 0) {
            throw new IllegalArgumentException(
                    "Limit must be greater than 0"
            );
        }

        // 1. Chuyển câu hỏi thành vector
        List<Float> queryVector =
                embeddingService.embedText(question);

        // 2. Tìm kiếm vector trong Qdrant
        Map<String, Object> response =
                qdrantService.search(queryVector, limit);

        // 3. Lấy danh sách kết quả từ Qdrant
        Object resultObject = response.get("result");

        if (!(resultObject instanceof List<?> results)) {
            return List.of();
        }

        List<RetrievedProductDTO> products = new ArrayList<>();

        // 4. Duyệt từng kết quả
        for (Object item : results) {

            if (!(item instanceof Map<?, ?> point)) {
                continue;
            }

            Object payloadObject = point.get("payload");

            if (!(payloadObject instanceof Map<?, ?> payload)) {
                continue;
            }

            Object productIdObject = payload.get("product_id");

            if (productIdObject == null) {
                continue;
            }

            String productId = productIdObject.toString();

            // 5. Lấy thông tin sản phẩm mới nhất từ MySQL
            DetailProductDTO product =
                    productRepository.selectDetailProduct(productId);

            if (product == null) {
                continue;
            }

            // 6. Lấy điểm tương đồng
            Object scoreObject = point.get("score");

            double score = scoreObject instanceof Number number
                    ? number.doubleValue()
                    : 0.0;

            products.add(
                    new RetrievedProductDTO(product, score)
            );
        }

        return products;
    }
}
