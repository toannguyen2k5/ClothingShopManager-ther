package com.example.ClothingStoreManagementAPI.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.model.Entity.*;
import com.example.ClothingStoreManagementAPI.model.DataRequest.*;
import com.example.ClothingStoreManagementAPI.model.DTO.SalesSlipDTO;
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
		int quantity = SalesSlipService.checkinforvalid(CheckInforValidData);
		return ResponseEntity.ok(common.ReturnReponse(quantity, "Select", "SalesSlip"));
	}
	@GetMapping("/selectByIdClient")
	public ResponseEntity<?> SelectByIdClient(@RequestParam String IdClient){
		List<SalesSlipDTO> SalesSlipDTOs = SalesSlipService.SelectSalesSlipByIdClient(IdClient);
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipDTOs, "Select", "SalesSlip"));
	}
	@GetMapping("/selectByDate")
	public ResponseEntity<?> SelectByDate(@RequestParam LocalDate createDate){
		List<SalesSlipDTO> SalesSlipDTOs = SalesSlipService.SellectSalesSlipByDate(createDate);
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipDTOs, "Select", "SalesSlip"));
	}
	@GetMapping("/selectByIdCreater")
	public ResponseEntity<?> SelectByIdCreater(@RequestParam String IdCreater){
		List<SalesSlipDTO> SalesSlipDTOs = SalesSlipService.SellectSalesSlipByIdCreater(IdCreater);
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipDTOs, "Select", "SalesSlip"));
	}
	@PostMapping("/insertSalesSlip")
	public ResponseEntity<?> InsertSalesSlip(@RequestBody SaleSlipFullData SaleSlipFullData){
		return ResponseEntity.ok(common.ReturnReponse(SalesSlipService.InsertSalesSlip(SaleSlipFullData.getSalesSlipData(), SaleSlipFullData.getShopDeliveryData()), "Insert", "SalesSlip"));
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