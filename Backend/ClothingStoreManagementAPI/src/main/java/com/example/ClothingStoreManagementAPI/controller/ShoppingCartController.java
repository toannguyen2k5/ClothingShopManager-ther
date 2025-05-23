package com.example.ClothingStoreManagementAPI.controller;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.model.DataRequest.ShoppingCartIncreaseData;
import com.example.ClothingStoreManagementAPI.model.Entity.ShoppingCart;
import com.example.ClothingStoreManagementAPI.model.DTO.ShoppingCartItemDTO;

@CrossOrigin(origins = "http://localhost:3000") // Cho phép React truy cập
@RestController
@RequestMapping("/api/shoppingcart/")
public class ShoppingCartController {
	// khi người dùng thêm vào giỏ hàng
	@Autowired
	private ShoppingCartService shoppingCartService;
	@Autowired
	private Common common;
	@PostMapping("/addToCart")
	public ResponseEntity<?> AddToCart(@RequestBody ShoppingCartIncreaseData shoppingCartIncreaseData) {
		Map<Boolean, String> result = shoppingCartService.AddToCart(shoppingCartIncreaseData);
		if(result.containsKey(true)) return ResponseEntity.ok(common.ReturnReponse(true, "Add", "shoppingcart"));
		else return ResponseEntity.ok(common.ReturnReponse(false, result.get(false), ""));
	}
	@GetMapping("/sellectShoppingCart")
	public ResponseEntity<?> SellectShoppingCart(@RequestParam String idUser){
		List<ShoppingCartItemDTO> result = shoppingCartService.SellectShoppingCart(idUser);
		return ResponseEntity.ok(common.ReturnReponse(result, "Sellect", "shoppingcart"));
	}
	@GetMapping("/deleteShoppingCart")
	public ResponseEntity<?> DeleteShoppingCart(@RequestParam String idShoppingCart){
		return ResponseEntity.ok(common.ReturnReponse(shoppingCartService.DeleteShoppingCart(idShoppingCart), "Delete", "shoppingcart"));
	}
	@GetMapping("/updateShoppingCart")
	public ResponseEntity<?> UpdateShoppingCart(@RequestParam int quantity ,@RequestParam String idShoppingCart){
		return ResponseEntity.ok(common.ReturnReponse(shoppingCartService.UpdateQuantity(quantity,idShoppingCart), "Update", "shoppingcart"));
	}
	@GetMapping("/updateStatusShoppingCart")
	public ResponseEntity<?> UpdateShoppingCart(@RequestParam boolean status ,@RequestParam String idShoppingCart){
		return ResponseEntity.ok(common.ReturnReponse(shoppingCartService.UpdateStatus(status,idShoppingCart), "Update", "shoppingcart"));
	}
}
