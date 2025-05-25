package com.example.shopmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.PurchaseDetail;

@Repository
public interface PurchaseDetailRepository extends JpaRepository<PurchaseDetail, String> {
	@Query("SELECT MAX(idPurchaseDetail) FROM PurchaseDetail")
	String getMaxId();
}
