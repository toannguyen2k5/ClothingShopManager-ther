package com.example.shopmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
	@Query("SELECT MAX(idProduct) FROM Product")
	String getMaxId();
}
