package com.example.shopmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.SalesDetail;

@Repository
public interface SalesDetailRepository extends JpaRepository<SalesDetail, String> {
	@Query("SELECT MAX(idSalesDetail) FROM SalesDetail")
	String getMaxId();
}
