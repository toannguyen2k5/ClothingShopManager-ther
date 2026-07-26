package com.example.ClothingStoreManagementAPI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.common.CommonUtil;
import com.example.ClothingStoreManagementAPI.model.Entity.Shop;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Shop")
public class ShopController {

    @Autowired
    private ShopService ShopService;
    @Autowired
    private Common common;

    @GetMapping("/sellectAll/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectAll(@PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<Shop> Shops = ShopService.SelectAllShop(limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(Shops, "Select all", "Shop"));
    }

    @GetMapping("/sellectShop/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectShop(@RequestParam String query, @PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<Shop> Shops = ShopService.SellectShop(query,limit,offset);
        return ResponseEntity.ok(common.ReturnReponse(Shops, "Select", "Shop"));
    }
    
    @GetMapping("/byId")
    public ResponseEntity<?> SellectShopById(@RequestParam String id) {
    	Shop Shops = ShopService.SellectShopById(id);
        return ResponseEntity.ok(common.ReturnReponse(Shops, "Select", "Shop"));
    }

    @PostMapping("/insertShop")
    public ResponseEntity<?> InsertShop(@RequestBody Shop Shop) {
        return ResponseEntity.ok(common.ReturnReponse(ShopService.InsertShop(Shop), "Insert", "Shop"));
    }
    
    @PostMapping("/update/status")
    public ResponseEntity<?> UpdateStatus(@RequestParam String id,@RequestParam boolean status) {
        return ResponseEntity.ok(common.ReturnReponse(ShopService.UpdateStatusShop(id,status), "Update status ", "Shop"));
    }
    
    @PostMapping("/update/infor")
    public ResponseEntity<?> UpdateInfor(@RequestBody Shop Shop) {
        return ResponseEntity.ok(common.ReturnReponse(ShopService.UpdateInforShop(Shop), "Update infor ", "Shop"));
    }

    @PostMapping("/deleteShop")
    public ResponseEntity<?> deleteShop(@RequestBody Shop Shop) {
        return ResponseEntity.ok(common.ReturnReponse(ShopService.deleteShop(Shop), "Update", "Shop"));
    }
}
