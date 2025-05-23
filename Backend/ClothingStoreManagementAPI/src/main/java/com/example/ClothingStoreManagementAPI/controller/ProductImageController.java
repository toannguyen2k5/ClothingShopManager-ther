package com.example.ClothingStoreManagementAPI.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.model.Entity.ProductImage;

import java.util.HashMap;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/ProductImage")
public class ProductImageController {
	@Autowired
	private ProductImageService ProductImageService;
	@Autowired
	private Common common;
	@GetMapping("/sellectProductImage")
	public ResponseEntity<?> SellectProductImage(@RequestParam String idProduct){
		List<ProductImage> ProductImages = ProductImageService.SellectProductImageByIdProduct(idProduct);
		return ResponseEntity.ok(common.ReturnReponse(ProductImages, "Sellect", "ProductImage"));
	}
	@PostMapping("/insertProductImage")
	public ResponseEntity<?> InsertProductImage(@RequestBody ProductImage ProductImage){
		return ResponseEntity.ok(common.ReturnReponse(ProductImageService.InsertProductImage(ProductImage), "Insert", "ProductImage"));
	}
	@GetMapping("/deleteProductImage")
	public ResponseEntity<?> DeleteProductImage(@RequestParam String IdImage){
		return ResponseEntity.ok(common.ReturnReponse(ProductImageService.DeleteProductImage(IdImage), "Insert", "ProductImage"));
	}
}