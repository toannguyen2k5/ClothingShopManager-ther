package com.example.ClothingStoreManagementAPI.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.product.service.*;
import com.example.ClothingStoreManagementAPI.product.common.CommonUtil;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Color;
import com.example.ClothingStoreManagementAPI.product.model.Entity.ProductMaterial;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/ProductMaterial")
public class ProductMaterialController {

    @Autowired
    private ProductMaterialService ProductMaterialService;
    @Autowired
    private Common common;

    @GetMapping("/sellectAll/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectAll(@PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<ProductMaterial> ProductMaterials = ProductMaterialService.SelectAllProductMaterial(limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(ProductMaterials, "Sellect all", "ProductMaterial"));
    }

    @GetMapping("/sellectProductMaterial/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectProductMaterial(@RequestParam String query, @PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<ProductMaterial> ProductMaterials = ProductMaterialService.SellectProductMaterial(query, limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(ProductMaterials, "Sellect", "ProductMaterial"));
    }
    
    @GetMapping("/sellectById")
    public ResponseEntity<?> SellectBrand(@RequestParam String id) {
    	ProductMaterial ProductMaterial = ProductMaterialService.SellectProductMaterialById(id);
        return ResponseEntity.ok(common.ReturnReponse(ProductMaterial, "Sellect", "brand"));
    }
    
    @PostMapping("/insertProductMaterial")
    public ResponseEntity<?> InsertProductMaterial(@RequestBody ProductMaterial ProductMaterial) {
        return ResponseEntity.ok(common.ReturnReponse(ProductMaterialService.InsertProductMaterial(ProductMaterial), "Insert", "ProductMaterial"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> UpdateProductMaterial(@RequestBody ProductMaterial ProductMaterial) {
        return ResponseEntity.ok(common.ReturnReponse(ProductMaterialService.UpdateProductMaterial(ProductMaterial), "Update", "ProductMaterial"));
    }
}
