
package com.example.ClothingStoreManagementAPI.ai.controller;

import com.example.ClothingStoreManagementAPI.ai.service.rag.retrieval.RetrievalService;
import com.example.ClothingStoreManagementAPI.ai.dto.RetrievedProductDTO;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ai/retrieval")
@RequiredArgsConstructor
public class RetrievalController {

    private final RetrievalService retrievalService;

    @GetMapping("/search")
    public ResponseEntity<List<RetrievedProductDTO>> searchProducts(
            @RequestParam String question,
            @RequestParam(defaultValue = "5") int limit
    ) {

        List<RetrievedProductDTO> results =
                retrievalService.searchProducts(question, limit);

        return ResponseEntity.ok(results);
    }
}
