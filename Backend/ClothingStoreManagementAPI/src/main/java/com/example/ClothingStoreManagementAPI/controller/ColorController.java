package com.example.ClothingStoreManagementAPI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.common.CommonUtil;
import com.example.ClothingStoreManagementAPI.model.Entity.Color;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/color")
public class ColorController {

    @Autowired
    private ColorService colorService;
    @Autowired
    private Common common;

    @GetMapping("/sellectAll/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectAll(@PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<Color> colors = colorService.SelectAllColor(limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(colors, "Sellect All", "color"));
    }

    @GetMapping("/sellectColor/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectColor(@RequestParam String query, @PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<Color> colors = colorService.SellectColor(query, limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(colors, "Sellect", "color"));
    }

    @PostMapping("/insertColor")
    public ResponseEntity<?> InsertColor(@RequestBody Color color) {
        return ResponseEntity.ok(common.ReturnReponse(colorService.InsertColor(color), "Insert", "color"));
    }

    @PostMapping("/updateAll")
    public ResponseEntity<?> UpdateColor(@RequestBody Color color) {
        return ResponseEntity.ok(common.ReturnReponse(colorService.UpdateColor(color), "Update", "color"));
    }
}
