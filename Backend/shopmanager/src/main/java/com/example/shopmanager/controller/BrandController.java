package com.example.shopmanager.controller;

import com.example.shopmanager.entity.Brand;
import com.example.shopmanager.service.BrandService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/brands")
public class BrandController {

	private final BrandService brandService;

	public BrandController(BrandService brandService) {
		this.brandService = brandService;
	}

	// Lấy tất cả brand
	@GetMapping
	public ResponseEntity<List<Brand>> getAllBrands() {
		return ResponseEntity.ok(brandService.findAll());
	}

	// Lấy brand theo ID
	@GetMapping("/{id}")
	public ResponseEntity<Brand> getBrandById(@PathVariable String id) {
		return brandService.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	}

	// Tạo mới brand
	@PostMapping
	public ResponseEntity<Brand> createBrand(@RequestBody Brand brand) {
		Brand createdBrand = brandService.create(brand);
		return ResponseEntity.ok(createdBrand);
	}

	// Cập nhật brand theo ID
	@PutMapping("/{id}")
	public ResponseEntity<Brand> updateBrand(@PathVariable String id, @RequestBody Brand brand) {
		return ResponseEntity.ok(brandService.update(id, brand));
	}

	// Xóa brand theo ID
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteBrand(@PathVariable String id) {
		brandService.delete(id);
		return ResponseEntity.noContent().build();
	}
}
