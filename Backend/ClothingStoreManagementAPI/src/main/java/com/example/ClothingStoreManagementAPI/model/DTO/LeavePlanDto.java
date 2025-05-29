package com.example.ClothingStoreManagementAPI.model.DTO;

import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LeavePlanDto {
    
    private String idLeavePlan;     // Có thể để null khi tạo mới
    private String idUser;
    private LocalDate startDate;
    private LocalDate endDate;
    private String typeLeave;
    private String reason;
    private String status;          // Optional: dùng khi trả về, không bắt buộc khi tạo
    private LocalDate createdAt;    // Optional: có thể tự sinh ở backend
}
