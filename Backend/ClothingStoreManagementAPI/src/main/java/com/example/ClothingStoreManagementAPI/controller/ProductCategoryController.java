package com.example.ClothingStoreManagementAPI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.common.CommonUtil;
import com.example.ClothingStoreManagementAPI.model.Entity.ProductCategory;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/ProductCategory")
public class ProductCategoryController {

    @Autowired
    private ProductCategoryService ProductCategoryService;
    @Autowired
    private Common common;

    @GetMapping("/sellectAll/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectAll(@PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<ProductCategory> ProductCategorys = ProductCategoryService.SelectAllProductCategory(limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(ProductCategorys, "Sellect all", "ProductCategory"));
    }

    @GetMapping("/sellectProductCategory/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectProductCategory(@RequestParam String query, @PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<ProductCategory> ProductCategorys = ProductCategoryService.SellectProductCategory(query, limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(ProductCategorys, "Sellect", "ProductCategory"));
    }

    @PostMapping("/insertProductCategory")
    public ResponseEntity<?> InsertProductCategory(@RequestBody ProductCategory ProductCategory) {
        return ResponseEntity.ok(common.ReturnReponse(ProductCategoryService.InsertProductCategory(ProductCategory), "Insert", "ProductCategory"));
    }

    @PostMapping("/updateProductCategory")
    public ResponseEntity<?> UpdateProductCategory(@RequestBody ProductCategory ProductCategory) {
        return ResponseEntity.ok(common.ReturnReponse(ProductCategoryService.UpdateProductCategory(ProductCategory), "Update", "ProductCategory"));
    }
}
