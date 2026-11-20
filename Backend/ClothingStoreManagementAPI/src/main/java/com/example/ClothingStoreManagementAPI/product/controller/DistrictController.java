package com.example.ClothingStoreManagementAPI.product.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.product.service.*;
import com.example.ClothingStoreManagementAPI.product.model.ConstData.District;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/District")
public class DistrictController {
	@Autowired
    private Common common;
	@Autowired
	private DistrictService DistrictService;
	@GetMapping("/Sellect")
	public ResponseEntity<?> SellectAll(@RequestParam String idProvince) {
        List<District> Districts = DistrictService.SelectByIdProvince(idProvince);
        return ResponseEntity.ok(common.ReturnReponse(Districts, "Sellect", "District"));
    }
}
