package com.example.ClothingStoreManagementAPI.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.product.service.*;
import com.example.ClothingStoreManagementAPI.product.common.CommonUtil;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Brand;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Brand")
public class BrandController {

    @Autowired
    private BrandService brandService;
    @Autowired
    private Common common;

    @GetMapping("/sellectAll/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectAll(@PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<Brand> brands = brandService.SelectAllBrand(limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(brands, "Sellect All", "brand"));
    }

    @GetMapping("/sellectBrand/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectBrand(@RequestParam String query,@PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<Brand> brands = brandService.SellectBrand(query, limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(brands, "Sellect", "brand"));
    }
    @GetMapping("/sellectById")
    public ResponseEntity<?> SellectBrand(@RequestParam String id) {
    	Brand brand = brandService.SellectBrandById(id);
        return ResponseEntity.ok(common.ReturnReponse(brand, "Sellect", "brand"));
    }
    @PostMapping("/insertBrand")
    public ResponseEntity<?> InsertBrand(@RequestBody Brand brand) {
        return ResponseEntity.ok(common.ReturnReponse(brandService.InsertBrand(brand), "Insert", "brand"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> UpdateBrand(@RequestBody Brand brand) {
        return ResponseEntity.ok(common.ReturnReponse(brandService.UpdateBrand(brand), "Insert", "brand"));
    }
}
