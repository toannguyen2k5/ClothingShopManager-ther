package com.example.ClothingStoreManagementAPI.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ClothingStoreManagementAPI.product.service.*;
import com.example.ClothingStoreManagementAPI.product.common.CommonUtil;
import com.example.ClothingStoreManagementAPI.product.model.Entity.DiscountEvent;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/DiscountEvent")
public class DiscountEventController {

    @Autowired
    private DiscountEventService discountEventService;
    @Autowired
    private Common common;

    @GetMapping("/sellectAll/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectAll(@PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<DiscountEvent> discountEvents = discountEventService.SellectAllDiscountEvent(limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(discountEvents, "Sellect All", "DiscountEvent"));
    }

    @GetMapping("/sellectDiscountEvent/{param_offset}/{param_limit}/")
    public ResponseEntity<?> SellectDiscountEvent(@RequestParam String query, @PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
        List<DiscountEvent> discountEvents = discountEventService.SellectDiscountEvent(query, limit, offset);
        return ResponseEntity.ok(common.ReturnReponse(discountEvents, "Sellect", "DiscountEvent"));
    }

    @PostMapping("/insertDiscountEvent")
    public ResponseEntity<?> InsertDiscountEvent(@RequestBody DiscountEvent discountEvent) {
        return ResponseEntity.ok(common.ReturnReponse(discountEventService.InsetDiscountEvent(discountEvent), "Insert", "DiscountEvent"));
    }

    @PostMapping("/updateDiscountEvent")
    public ResponseEntity<?> UpdateDiscountEvent(@RequestBody DiscountEvent discountEvent) {
        return ResponseEntity.ok(common.ReturnReponse(discountEventService.UpdateDiscountEvent(discountEvent), "Update", "DiscountEvent"));
    }

    @GetMapping("/deleteDiscountEvent")
    public ResponseEntity<?> DeleteDiscountEvent(@RequestParam String idDiscountEvent) {
        return ResponseEntity.ok(common.ReturnReponse(discountEventService.DeleteDiscountEvent(idDiscountEvent), "Delete", "DiscountEvent"));
    }
}
