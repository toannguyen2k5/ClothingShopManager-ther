package com.example.ClothingStoreManagementAPI.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.ClothingStoreManagementAPI.common.CommonUtil;
import com.example.ClothingStoreManagementAPI.model.Entity.ProductMaterial;
import com.example.ClothingStoreManagementAPI.model.Entity.Size;
import com.example.ClothingStoreManagementAPI.service.Common;
import com.example.ClothingStoreManagementAPI.service.SizeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Size")
public class SizeController {

    @Autowired
    private SizeService SizeService;
    @Autowired
    private Common common;

    @GetMapping("/sellectAll/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectAll(@PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<Size> Sizes = SizeService.SelectAllSize(limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(Sizes, "Sellect all", "Size"));
    }

    @GetMapping("/sellectSize/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectSize(@RequestParam String query, @PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<Size> Sizes = SizeService.SellectSize(query, limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(Sizes, "Sellect", "Size"));
    }
    
    @GetMapping("/sellectById")
    public ResponseEntity<?> SellectBrand(@RequestParam String id) {
    	Size Size = SizeService.SellectSizeById(id);
        return ResponseEntity.ok(common.ReturnReponse(Size, "Sellect", "brand"));
    }

    @PostMapping("/insertSize")
    public ResponseEntity<?> InsertSize(@RequestBody Size Size) {
        return ResponseEntity.ok(common.ReturnReponse(SizeService.InsertSize(Size), "Insert", "Size"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> UpdateSize(@RequestBody Size Size) {
        return ResponseEntity.ok(common.ReturnReponse(SizeService.UpdateSize(Size), "Update", "Size"));
    }
}
