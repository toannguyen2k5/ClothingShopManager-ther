package com.example.ClothingStoreManagementAPI.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ClothingStoreManagementAPI.model.Entity.LeavePlan;

public interface LeavePlanRepository extends JpaRepository<LeavePlan, String> {
	List<LeavePlan> findByIdUser(String idUser);
}
