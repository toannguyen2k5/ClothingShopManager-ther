package com.example.shopmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.Supplier;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, String> {
	@Query("SELECT MAX(idSupplier) FROM Supplier")
	String getMaxId();
}
