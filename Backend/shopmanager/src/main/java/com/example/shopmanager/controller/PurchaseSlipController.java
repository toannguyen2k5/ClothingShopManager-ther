package com.example.shopmanager.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.shopmanager.entity.PurchaseSlip;
import com.example.shopmanager.service.PurchaseSlipService;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/api/purchase-slips")
public class PurchaseSlipController {

    @Autowired
    private PurchaseSlipService purchaseSlipService;

    /** 
     * Lấy danh sách tất cả phiếu nhập 
     */
    @GetMapping
    public ResponseEntity<List<PurchaseSlip>> getAll() {
        List<PurchaseSlip> list = purchaseSlipService.findAll();
        return ResponseEntity.ok(list);
    }

    /**
     * Lấy chi tiết một phiếu theo id
     */
    @GetMapping("/{id}")
    public ResponseEntity<PurchaseSlip> getById(@PathVariable String id) {
        return purchaseSlipService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Tạo mới phiếu nhập
     */
    @PostMapping
    public ResponseEntity<PurchaseSlip> create(@RequestBody PurchaseSlip slip) {
        PurchaseSlip saved = purchaseSlipService.create(slip);
        return ResponseEntity.ok(saved);
    }

    /**
     * Cập nhật toàn bộ phiếu nhập (PUT thay thế hết, hoặc bạn có thể dùng PATCH tuỳ thích)
     */
    @PutMapping("/{id}")
    public ResponseEntity<PurchaseSlip> update(
            @PathVariable String id,
            @RequestBody PurchaseSlip slip) {

        return purchaseSlipService.findById(id)
            .map(existing -> {
                // copy các trường cần cập nhật vào existing
                existing.setDayCreate(slip.getDayCreate());
                existing.setTotalBill(slip.getTotalBill());
                existing.setApproveStatus(slip.getApproveStatus());
                existing.setStatusReceive(slip.getStatusReceive());
                existing.setStatusUpdateDate(slip.getStatusUpdateDate());
                existing.setStatusEditor(slip.getStatusEditor());
                existing.setDetails(slip.getDetails());
                // nếu muốn cập nhật creater / supplier, hãy gán thêm
                existing.setCreater(slip.getCreater());
                existing.setSupplier(slip.getSupplier());

                PurchaseSlip updated = purchaseSlipService.update(id, existing);
                return ResponseEntity.ok(updated);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Xóa phiếu nhập theo id
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        return purchaseSlipService.findById(id)
            .map(existing -> {
                purchaseSlipService.delete(id);
                return ResponseEntity.noContent().<Void>build();
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
