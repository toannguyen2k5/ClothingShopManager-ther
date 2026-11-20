package com.example.ClothingStoreManagementAPI.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.product.service.*;
import com.example.ClothingStoreManagementAPI.product.common.CommonUtil;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Supplier;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Supplier")
public class SupplierController {

    @Autowired
    private SupplierService SupplierService;
    @Autowired
    private Common common;

    @GetMapping("/sellectAll/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectAll(@PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<Supplier> Suppliers = SupplierService.SelectAllSupplier(limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(Suppliers, "Sellect all", "Supplier"));
    }

    @GetMapping("/sellectSupplier/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectSupplier(@RequestParam String query, @PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<Supplier> Suppliers = SupplierService.SellectSupplier(query, limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(Suppliers, "Sellect", "Supplier"));
    }
    
    @GetMapping("/sellect/byID")
    public ResponseEntity<?> SellectSupplier(@RequestParam String id) {
        Supplier Suppliers = SupplierService.SellectSupplier(id);
        return ResponseEntity.ok(common.ReturnReponse(Suppliers, "Sellect", "Supplier"));
    }

    @PostMapping("/insertSupplier")
    public ResponseEntity<?> InsertSupplier(@RequestBody Supplier Supplier) {
        return ResponseEntity.ok(common.ReturnReponse(SupplierService.InsertSupplier(Supplier), "Insert", "Supplier"));
    }

    @PostMapping("/updateSupplier")
    public ResponseEntity<?> UpdateSupplier(@RequestBody Supplier Supplier) {
        return ResponseEntity.ok(common.ReturnReponse(SupplierService.UpdateSupplier(Supplier), "Update", "Supplier"));
    }
}
