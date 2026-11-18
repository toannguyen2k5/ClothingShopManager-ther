package com.example.ClothingStoreManagementAPI.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.service.Common;
import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.model.DTO.DetailProductDTO;
import com.example.ClothingStoreManagementAPI.model.DTO.DetailProductv2DTO;
import com.example.ClothingStoreManagementAPI.model.Entity.DetailProduct;
	
@CrossOrigin(origins = "http://localhost:3000") // Cho phép React truy cập
@RestController
@RequestMapping("/api/detailproduct/")
public class DetailProductController {
	@Autowired
	private DetailProductService detailProductService;
	@Autowired
	private InventoryShopService InventoryShopService;
	@Autowired
	private Common common;
	// khi người dùng click vào sản phẩm để biết thêm chi tiết
	@GetMapping("sellect/detailProperty")
	public ResponseEntity<?> SellectDetaiProduct(@RequestParam String idProduct){
	DetailProductDTO detailProductDTO = detailProductService.SelectDetail(idProduct);
	return ResponseEntity.ok(common.ReturnReponse(detailProductDTO, "Sellect", "DetaiProduct"));
	}
	@GetMapping("sellect/detailPropertyByShop")
	public ResponseEntity<?> SellectDetaiProduct(@RequestParam String idProduct,@RequestParam String idShop){
	List<DetailProductv2DTO> detailProductDTO = detailProductService.SelectDetail(idProduct,idShop);
	return ResponseEntity.ok(common.ReturnReponse(detailProductDTO, "Sellect", "DetaiProduct"));
	}
	@GetMapping("sellect/alldetail")
	public ResponseEntity<?> SellectAllDetaiProduct(@RequestParam String idProduct){
	return ResponseEntity.ok(common.ReturnReponse(detailProductService.GetDetailProductv2DTO(idProduct), "Sellect all", "DetaiProduct by id"));
	}
	@GetMapping("sellect/seriNumber")
	public ResponseEntity<?> SellectSeriNumber(@RequestParam String idProduct,@RequestParam String idColor , @RequestParam String idSize){
	String seriNumber = detailProductService.SelectSeriNumber(idProduct,idColor,idSize);
	return ResponseEntity.ok(common.ReturnReponse(seriNumber, "Sellect", "DetaiProduct"));
	}
	@GetMapping("sellect/invenofshop")
	public ResponseEntity<?> invenofshop(@RequestParam String idDetail){
	return ResponseEntity.ok(common.ReturnReponse(detailProductService.GetInventoryDTO(idDetail), "Sellect all", "DetaiProduct by id"));
	}
	@GetMapping("sellect/inventory")
	public ResponseEntity<?> SellectInventory(@RequestParam String idDetail){
		Long quantity = InventoryShopService.SelectQuantityInventory(idDetail);
		return ResponseEntity.ok(common.ReturnReponse(quantity, "Sellect", "Inventory Detail Product"));
	}
	// khi thêm hoặc chỉnh sửa sản phẩm
	@PostMapping("insert")
	public ResponseEntity<?> InsertDetailProduct(@RequestBody DetailProduct detailProduct){
	return ResponseEntity.ok(common.ReturnReponse(detailProductService.InsertDetailProduct(detailProduct), "Insert", "DetaiProduct"));
	}
	@PostMapping("update")
	public ResponseEntity<?> UpdateDetailProduct(@RequestBody DetailProduct detailProduct){
	return ResponseEntity.ok(common.ReturnReponse(detailProductService.UpdateDetailProduct(detailProduct), "Update", "DetaiProduct"));
	}
}
