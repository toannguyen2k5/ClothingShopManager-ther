package com.example.shopmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.SalesSlip;

@Repository
public interface SalesSlipRepository extends JpaRepository<SalesSlip, String> {
	@Query("SELECT MAX(idSalesSlip) FROM SalesSlip")
	String getMaxId();
}
