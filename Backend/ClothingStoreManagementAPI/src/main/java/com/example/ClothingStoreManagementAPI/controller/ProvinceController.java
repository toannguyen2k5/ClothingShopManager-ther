package com.example.ClothingStoreManagementAPI.controller;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.model.ConstData.Province;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Province")
public class ProvinceController {
	@Autowired
    private Common common;
	@Autowired
	private ProvinceService ProvinceService;
	@GetMapping("/SellectAll")
	public ResponseEntity<?> SellectAll() {
        List<Province> Provinces = ProvinceService.SellectAll();
        return ResponseEntity.ok(common.ReturnReponse(Provinces, "Sellect All", "Province"));
    }
}
