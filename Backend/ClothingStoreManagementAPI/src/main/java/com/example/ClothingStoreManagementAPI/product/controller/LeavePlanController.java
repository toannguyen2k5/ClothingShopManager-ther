package com.example.ClothingStoreManagementAPI.product.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.ClothingStoreManagementAPI.product.model.DTO.LeavePlanDto;
import com.example.ClothingStoreManagementAPI.product.model.Entity.LeavePlan;
import com.example.ClothingStoreManagementAPI.product.repository.LeavePlanRepository;
import com.example.ClothingStoreManagementAPI.product.service.Common;

@RestController
@RequestMapping("/api/leave-plans")
public class LeavePlanController {

    @Autowired
    private LeavePlanRepository leavePlanRepository;
	@Autowired
	private Common common;

	@PutMapping("/user/{idUser}")
    public ResponseEntity<?> getLeavePlansByUser(@PathVariable String idUser) {
        List<LeavePlan> plans = leavePlanRepository.findByIdUser(idUser);
        return ResponseEntity.ok(common.ReturnReponse(plans, "Sellect", "Users"));
    }
	@PostMapping("/new")
	public ResponseEntity<?> createLeavePlan(@RequestBody LeavePlanDto dto) {
	    LeavePlan plan = new LeavePlan();
	    plan.setIdLeavePlan(UUID.randomUUID().toString());
	    plan.setIdUser(dto.getIdUser());
	    plan.setStartDate(dto.getStartDate());
	    plan.setEndDate(dto.getEndDate());
	    plan.setTypeLeave(dto.getTypeLeave());
	    plan.setStatus("Pending");
	    plan.setReason(dto.getReason());

	    leavePlanRepository.save(plan);
	    return ResponseEntity.ok("Yêu cầu nghỉ phép đã được gửi.");
	}
}