package com.example.ClothingStoreManagementAPI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.model.Entity.ListWarehouseInCharge;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/ListWarehouseInCharge")
public class ListWarehouseInChargeController {
	@Autowired
	private ListWarehouseInChargeService ListWarehouseInChargeService;
	@Autowired
	private Common common;
	@PostMapping("/insertListWarehouseInCharge")
	public ResponseEntity<?> InsertListWarehouseInCharge(@RequestBody ListWarehouseInCharge ListWarehouseInCharge){
		return ResponseEntity.ok(common.ReturnReponse(ListWarehouseInChargeService.InsertListWarehouseInCharge(ListWarehouseInCharge), "Insert", "ListWarehouseInCharge"));
	}
	@GetMapping("/UpdateListWICByIds")
	public ResponseEntity<?> UpdateListWarehouseInCharge(@RequestParam String idList,@RequestParam String idShop){
		return ResponseEntity.ok(common.ReturnReponse(ListWarehouseInChargeService.UpdateListWICByIds(idList,idShop), "Update", "ListWarehouseInCharge"));
	}
	@GetMapping("/UpdateListWICByNumbers")
	public ResponseEntity<?> UpdateListWarehouseInCharge(@RequestParam String idList,@RequestParam String cccdNumber,@RequestParam String motorbikeNumber){
		return ResponseEntity.ok(common.ReturnReponse(ListWarehouseInChargeService.UpdateListWICByNumbers(idList,cccdNumber,motorbikeNumber), "Update", "ListWarehouseInCharge"));
	} 
	@GetMapping("/DeleteListWarehouseInCharge")
	public ResponseEntity<?> UpdateListWarehouseInCharge(@RequestParam String idDetail){
		return ResponseEntity.ok(common.ReturnReponse(ListWarehouseInChargeService.DeleteListWarehouseInCharge(idDetail), "Update", "ListWarehouseInCharge"));
	} 
}
