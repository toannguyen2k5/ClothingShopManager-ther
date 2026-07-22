package com.example.ClothingStoreManagementAPI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.common.CommonUtil;
import com.example.ClothingStoreManagementAPI.model.Entity.Size;
import com.example.ClothingStoreManagementAPI.model.Entity.Style;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Style")
public class StyleController {

    @Autowired
    private StyleService StyleService;
    @Autowired
    private Common common;

    @GetMapping("/sellectAll/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectAll(@PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<Style> Styles = StyleService.SelectAllStyle(limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(Styles, "Sellect all", "Style"));
    }

    @GetMapping("/sellectStyle/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectStyle(@RequestParam String query, @PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<Style> Styles = StyleService.SellectStyle(query, limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(Styles, "Sellect", "Style"));
    }
    
    @GetMapping("/sellectById")
    public ResponseEntity<?> SellectBrand(@RequestParam String id) {
    	Style Style = StyleService.SellectSizeById(id);
        return ResponseEntity.ok(common.ReturnReponse(Style, "Sellect", "brand"));
    }

    @PostMapping("/insertStyle")
    public ResponseEntity<?> InsertStyle(@RequestBody Style Style) {
        return ResponseEntity.ok(common.ReturnReponse(StyleService.InsertStyle(Style), "Insert", "Style"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> UpdateStyle(@RequestBody Style Style) {
        return ResponseEntity.ok(common.ReturnReponse(StyleService.UpdateStyle(Style), "Update", "Style"));
    }
}
