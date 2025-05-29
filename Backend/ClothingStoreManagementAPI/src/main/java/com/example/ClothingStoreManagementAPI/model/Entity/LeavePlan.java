package com.example.ClothingStoreManagementAPI.model.Entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "leave_plan")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LeavePlan {

	@Id
	@Column(name = "idLeavePlan", length = 45, nullable = false)
	private String idLeavePlan;

	@Column(name = "idUser", length = 45, nullable = false)
	private String idUser;

	@Column(name = "startDate", nullable = false)
	private LocalDate startDate;

	@Column(name = "endDate", nullable = false)
	private LocalDate endDate;

	@Column(name = "typeLeave", length = 50)
	private String typeLeave; // Nghỉ phép, Nghỉ bệnh, Nghỉ cá nhân

	@Column(name = "reason", columnDefinition = "TEXT")
	private String reason;

	@Column(name = "status", length = 20)
	private String status; // Pending, Approved, Rejected

	@Column(name = "createdAt")
	private LocalDate createdAt;
}