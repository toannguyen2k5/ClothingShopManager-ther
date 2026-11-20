
package com.example.ClothingStoreManagementAPI.ai.service.rag.indexing;

import com.example.ClothingStoreManagementAPI.ai.service.rag.embedding.EmbeddingService;
import com.example.ClothingStoreManagementAPI.ai.service.rag.retrieval.QdrantService;
import com.example.ClothingStoreManagementAPI.product.model.DTO.DetailProductDTO;
import com.example.ClothingStoreManagementAPI.product.repository.ProductRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class IndexingService {

    private final ProductRepository productRepository;
    private final ProductDocumentBuilder documentBuilder;
    private final EmbeddingService embeddingService;
    private final QdrantService qdrantService;

    public IndexingService(
            ProductRepository productRepository,
            ProductDocumentBuilder documentBuilder,
            EmbeddingService embeddingService,
            QdrantService qdrantService
    ) {
        this.productRepository = productRepository;
        this.documentBuilder = documentBuilder;
        this.embeddingService = embeddingService;
        this.qdrantService = qdrantService;
    }

    @Transactional(readOnly = true)
    public Map<String, Object> indexProduct(String productId) {

        // 1. Lấy thông tin sản phẩm từ MySQL
        DetailProductDTO product =
                productRepository.selectDetailProduct(productId);

        if (product == null) {
            throw new RuntimeException(
                    "Không tìm thấy sản phẩm: " + productId
            );
        }

        // 2. Lấy thêm thông tin màu sắc và kích thước
        product.setColorSize(
                productRepository.SelectColorSizeByIdProduct(productId)
        );

        // 3. Chuyển thông tin sản phẩm thành văn bản
        String document = documentBuilder.build(product);

        if (document == null || document.isBlank()) {
            throw new RuntimeException(
                    "Không tạo được document cho sản phẩm: " + productId
            );
        }

        // 4. Tạo embedding bằng BGE-M3
        List<List<Float>> embeddings =
                embeddingService.embedTexts(List.of(document));

        if (embeddings == null || embeddings.isEmpty()) {
            throw new RuntimeException("Embedding service không trả về vector");
        }

        // 5. Chuyển List<Float> thành List<Double>
        List<Double> vector = new ArrayList<>();

        for (Float value : embeddings.get(0)) {
            vector.add(value.doubleValue());
        }

        // 6. Chuẩn bị metadata lưu trong Qdrant
        Map<String, Object> metadata = new LinkedHashMap<>();

        metadata.put("name", product.getNameProduct());
        metadata.put("category", product.getNameCategory());
        metadata.put("brand", product.getNameBrand());
        metadata.put("material", product.getNameMaterial());
        metadata.put("style", product.getNameStyle());

        if (product.getDescription() != null) {
            metadata.put("description", product.getDescription());
        }

        // 7. Đảm bảo collection tồn tại
        qdrantService.createCollection();

        // 8. Lưu vector và metadata vào Qdrant
        qdrantService.upsertPoint(
                productId,
                vector,
                metadata
        );

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("success", true);
        result.put("productId", productId);
        result.put("document", document);
        result.put("vectorDimension", vector.size());
        result.put("message", "Index sản phẩm thành công");

        return result;
    }
}
