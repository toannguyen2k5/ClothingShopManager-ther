
package com.example.ClothingStoreManagementAPI.ai.controller;

import com.example.ClothingStoreManagementAPI.ai.service.rag.indexing.IndexingService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai/indexing")
@RequiredArgsConstructor
public class IndexingController {

    private final IndexingService indexingService;

    /**
     * Index một sản phẩm.
     */
    @PostMapping("/product/{productId}")
    public ResponseEntity<?> indexProduct(
            @PathVariable String productId
    ) {
        indexingService.indexProduct(productId);

        return ResponseEntity.ok(
                Map.of(
                        "success", true,
                        "message", "Product indexed successfully",
                        "productId", productId
                )
        );
    }
}
