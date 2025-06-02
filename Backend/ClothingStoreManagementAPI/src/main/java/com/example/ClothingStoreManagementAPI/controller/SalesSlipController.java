package com.example.ClothingStoreManagementAPI.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.model.Entity.*;
import com.example.ClothingStoreManagementAPI.model.DataRequest.*;
import com.example.ClothingStoreManagementAPI.common.CommonUtil;
import com.example.ClothingStoreManagementAPI.model.DTO.DetailPurchaseSlipDTO;
import com.example.ClothingStoreManagementAPI.model.DTO.PurchaseSlipDTO;
import com.example.ClothingStoreManagementAPI.model.DTO.SalesSlipDTO;
import com.example.ClothingStoreManagementAPI.model.DTO.ShowAllRateDTO;

import java.util.*;
import java.time.LocalDate;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/SalesSlip")
public class SalesSlipController {
	@Autowired
	private SalesSlipService SalesSlipService;
	@Autowired
	private Common common;
	@PostMapping("/checkinforvalid")
	public ResponseEntity<?> checkinforvalid(@RequestBody CheckInforValidData CheckInforValidData){
		String idDetail = SalesSlipService.checkinforvalid(CheckInforValidData);
		return ResponseEntity.ok(common.ReturnReponse(idDetail, "Select", "SalesSlip"));
	}
	@GetMapping("/SelectAll/{param_offset}/{param_limit}/")
	public ResponseEntity<?> SelectAll(@PathVariable String param_limit, @PathVariable String param_offset){
		int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
		List<SalesSlipDTO> SalesSlipDTOs = SalesSlipService.SellectAll(offset,limit);
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipDTOs, "Sellect", "PurchaseSlip"));
	}
	@GetMapping("/SelectDetail")
	public ResponseEntity<?> SelectDetail(@RequestParam String idSalesSlip){
		List<DetailPurchaseSlipDTO> PurchaseSlips = SalesSlipService.SellectDetailSalesSlip(idSalesSlip);
		return ResponseEntity.ok(common.ReturnReponse(PurchaseSlips, "Sellect", "PurchaseSlip"));
	}
	@GetMapping("/showAllRate")
	public ResponseEntity<?> showAllReate(){
		List<ShowAllRateDTO> SalesSlipDTOs = SalesSlipService.ShowAllRate();
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipDTOs, "Show", "comment"));
	}
	@PostMapping("/insertSalesSlip")
	public ResponseEntity<?> InsertSalesSlip(@RequestBody SaleSlipFullData saleSlipFullData){
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipService.InsertSalesSlip(saleSlipFullData.getSalesSlipData(), saleSlipFullData.getShopDeliveryData()), "Insert", "SalesSlip"));
	}
	@PostMapping("/updateInfor")
	public ResponseEntity<?> UpdateSalesSlip(@RequestBody SalesSlip SalesSlip){
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipService.UpdateSalesSlip(SalesSlip), "Update", "SalesSlip"));
	}
	@PostMapping("/updateAll")
	public ResponseEntity<?> UpdateSalesSlip(@RequestBody SaleSlipInsertData SaleSlipInsertData){
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipService.UpdateSalesSlip(SaleSlipInsertData.getSalesSlip(),SaleSlipInsertData.getShopDeliveryData()), "Update", "SalesSlip"));
	}
	@GetMapping("/delete")
	public ResponseEntity<?> DeleteSalesSlip(@RequestParam String idSalesSlip){
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipService.DeleteSalesSlip(idSalesSlip), "Delete", "SalesSlip"));
	}
	@GetMapping("/calculateShippingFee")
	public ResponseEntity<?> UpdateSalesSlip(@RequestParam String addressReceive ,@RequestParam List<String> idShops){
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipService.ShippingFee(addressReceive,idShops), "calculate", "ShippingFee"));
	}
	@GetMapping("/detailedRefundSlips/show")
	public ResponseEntity<?> ShowDetailedRefundSlips(@RequestParam String idSalesSlip){
		List<DetailedRefundSlip> DetailedRefundSlips = SalesSlipService.ShowDetailedRefundSlips(idSalesSlip);
		return ResponseEntity.ok(common.ReturnReponse(DetailedRefundSlips, "Show", "DetailedRefundSlips"));
	}
	@PostMapping("/detailedRefundSlips/add")
	public ResponseEntity<?> AddDetailedRefundSlips(@RequestBody List<DetailedRefundSlip> DetailedRefundSlips){
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipService.AddDetailedRefundSlips(DetailedRefundSlips), "Add", "DetailedRefundSlips"));
	}
	@GetMapping("/detailedRefundSlips/deleteAll")
	public ResponseEntity<?> DeleteDetailedRefundSlips(@RequestParam String idSalesSlip){
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipService.DeleteDetailedRefundSlips(idSalesSlip), "Delete", "DetailedRefundSlips"));
	}
	@GetMapping("/detailedRefundSlips/deleteElement")
	public ResponseEntity<?> DeleteDetailedRefundSlip(@RequestParam String idDetailedRefundSlip){
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipService.DeleteDetailedRefundSlip(idDetailedRefundSlip), "Delete", "DetailedRefundSlips"));
	}
	@PostMapping("/detailedRefundSlips/update")
	public ResponseEntity<?> UpdateDetailedRefundSlip(@RequestBody DetailedRefundSlip DetailedRefundSlip){
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipService.UpdateDetailedRefundSlip(DetailedRefundSlip), "Update", "DetailedRefundSlips"));
	}
	@PostMapping("/inventorySalesSlip/update")
	public ResponseEntity<?> UpdateInventorySalesSlip(@RequestBody SalesSlip SalesSlip,@RequestBody Map<String,List<CartData>> ShoppingCartDatas){
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipService.UpdateInventorySalesSlip(SalesSlip,ShoppingCartDatas), "Update", "Inventory From SalesSlip"));
	}
	@PostMapping("/inventoryRefundSlip/update")
	public ResponseEntity<?> UpdateInventoryRefundSlip(@RequestBody SalesSlip SalesSlip ,@RequestBody List<DetailedRefundSlip> DetailedRefundSlips){
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipService.UpdateInventoryRefundSlip(SalesSlip,DetailedRefundSlips), "Update", "Inventory From RefundSlip"));
	}
}