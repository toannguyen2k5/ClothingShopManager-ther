package com.example.ClothingStoreManagementAPI.product.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Price;
import com.example.ClothingStoreManagementAPI.product.service.Common;
import com.example.ClothingStoreManagementAPI.product.service.PriceService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Price")
public class PriceController {
	@Autowired
	private PriceService PriceService;
	@Autowired
	private Common common;
	@GetMapping("/sellectPrice")
	public ResponseEntity<?> SellectPrice(@RequestParam String idProduct){
		List<Price> Prices = PriceService.SelectPrice(idProduct);
		return ResponseEntity.ok(common.ReturnReponse(Prices, "Sellect", "Price"));
	}
	@PostMapping("/insertPrice")
	public ResponseEntity<?> InsertPrice(@RequestBody Price Price){
		return ResponseEntity.ok(common.ReturnReponse(PriceService.InsertPrice(Price), "Insert", "Price"));
	}
	@GetMapping("/update")
	public ResponseEntity<?> UpdatePrice(@RequestParam String idPrice ,@RequestParam int price){
		return ResponseEntity.ok(common.ReturnReponse(PriceService.UpdatePrice(idPrice,price), "Update", "Price"));
	}
}
