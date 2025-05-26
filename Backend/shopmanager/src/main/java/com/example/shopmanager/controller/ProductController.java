package com.example.shopmanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.shopmanager.entity.Product;
import com.example.shopmanager.enums.Role;
import com.example.shopmanager.security.CheckRole;
import com.example.shopmanager.service.ProductService;
import com.example.shopmanager.util.CommonUtil;

@RestController
@RequestMapping("/api/products")
public class ProductController {
	@Autowired
	private ProductService productService;
	@Autowired
	private CommonUtil commonUtil;

	@GetMapping("/with-brand")
	public ResponseEntity<List<Product>> getProductsWithBrand() {
		List<Product> list = productService.getAllProductsWithBrand();
		return ResponseEntity.ok(list);
	}

	@GetMapping("/{idUser}/get-list")
	@CheckRole(allowedRoles = {Role.manager})
	public ResponseEntity<?> getAllProductList(@PathVariable String idUser) {
		return commonUtil.ReturnReponse(productService.findAll(),null,null);
	}
}