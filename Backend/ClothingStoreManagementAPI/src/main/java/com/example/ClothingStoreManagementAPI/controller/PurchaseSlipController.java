package com.example.ClothingStoreManagementAPI.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.model.Entity.DetailPurchaseSlip;
import com.example.ClothingStoreManagementAPI.model.Entity.ListOfReceivingStores;
import com.example.ClothingStoreManagementAPI.model.Entity.PurchaseSlip;
import com.example.ClothingStoreManagementAPI.model.DataRequest.*;
import java.util.*;
import java.time.LocalDate;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/PurchaseSlip")
public class PurchaseSlipController {
	@Autowired
	private PurchaseSlipService PurchaseSlipService;
	@Autowired
	private Common common;
	@GetMapping("/SelectByidSupplier")
	public ResponseEntity<?> SelectByidSupplier(@RequestParam String idSupplier){
		List<PurchaseSlip> PurchaseSlips = PurchaseSlipService.SelectPurchaseSlipByidSupplier(idSupplier);
		return ResponseEntity.ok(common.ReturnReponse(PurchaseSlips, "Sellect", "PurchaseSlip"));
	}
	@GetMapping("/SelectByDate")
	public ResponseEntity<?> SelectByDate(@RequestParam LocalDate createDate){
		List<PurchaseSlip> PurchaseSlips = PurchaseSlipService.SellectPurchaseSlipByDate(createDate);
		return ResponseEntity.ok(common.ReturnReponse(PurchaseSlips, "Sellect", "PurchaseSlip"));
	}
	@GetMapping("/SelectByIdCreater")
	public ResponseEntity<?> SelectByIdCreater(@RequestParam String IdCreater){
		List<PurchaseSlip> PurchaseSlips = PurchaseSlipService.SellectPurchaseSlipByIdCreater(IdCreater);
		return ResponseEntity.ok(common.ReturnReponse(PurchaseSlips, "Sellect", "PurchaseSlip"));
	}
	@PostMapping("/insertPurchaseSlip")
	public ResponseEntity<?> InsertPurchaseSlip(@RequestBody PucharSlipData PucharSlipData ){
		return ResponseEntity.ok(common.ReturnReponse(PurchaseSlipService.InsertPurchaseSlip(PucharSlipData.getPurchaseSlip(), PucharSlipData.getShopReceiveData()), "Insert", "PurchaseSlip"));
	}
	@PostMapping("/updateInfor")
	public ResponseEntity<?> UpdatePurchaseSlip(@RequestBody PurchaseSlip PurchaseSlip){
		return ResponseEntity.ok(common.ReturnReponse(PurchaseSlipService.UpdatePurchaseSlip(PurchaseSlip), "Update", "PurchaseSlip"));
	}
	@PostMapping("/updateAll")
	public ResponseEntity<?> UpdatePurchaseSlip(@RequestBody PucharSlipData PucharSlipData){
		return ResponseEntity.ok(common.ReturnReponse(PurchaseSlipService.UpdatePurchaseSlip(PucharSlipData.getPurchaseSlip(),PucharSlipData.getShopReceiveData()), "Update", "PurchaseSlip"));
	}
	@GetMapping("/Delete")
	public ResponseEntity<?> DeletePurchaseSlip(@RequestParam String idPurchaseSlip){
		return ResponseEntity.ok(common.ReturnReponse((PurchaseSlipService.DeletePurchaseSlip(idPurchaseSlip)), "Delete", "PurchaseSlip"));
	}
	@PostMapping("/inventoryPurchaseSlip/update")
	public ResponseEntity<?> UpdateInventoryPurchaseSlip(@RequestBody ListOfReceivingStores ListOfReceivingStores,@RequestBody List<DetailPurchaseSlip> DetailPurchaseSlips){
		return ResponseEntity.ok(common.ReturnReponse((PurchaseSlipService.UpdateInventoryPurchaseSlip(ListOfReceivingStores,DetailPurchaseSlips)), "Update", "Inventory From PurchaseSlip"));
	}
}
