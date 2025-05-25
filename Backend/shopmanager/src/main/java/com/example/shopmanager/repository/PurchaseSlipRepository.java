package com.example.shopmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.PurchaseSlip;

@Repository
public interface PurchaseSlipRepository extends JpaRepository<PurchaseSlip, String> {
	@Query("SELECT MAX(idPurchaseSlip) FROM PurchaseSlip")
	String getMaxId();
}
