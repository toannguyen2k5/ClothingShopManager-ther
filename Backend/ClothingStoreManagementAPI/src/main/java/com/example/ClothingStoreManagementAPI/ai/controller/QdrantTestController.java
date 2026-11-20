package com.example.ClothingStoreManagementAPI.ai.controller;

import org.springframework.web.bind.annotation.*;

import com.example.ClothingStoreManagementAPI.ai.service.rag.retrieval.QdrantService;

@RestController
@RequestMapping("/api/ai/qdrant")
public class QdrantTestController {

    private final QdrantService qdrantService;

    public QdrantTestController(QdrantService qdrantService) {
        this.qdrantService = qdrantService;
    }

    @PostMapping("/create-collection")
    public String createCollection() {
        qdrantService.createCollection();
        return "Qdrant collection is ready!";
    }
}