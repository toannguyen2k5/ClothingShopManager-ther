package com.example.shopmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.Shop;

@Repository
public interface ShopRepository extends JpaRepository<Shop, String> {
	@Query("SELECT MAX(idShop) FROM Shop")
	String getMaxId();
}
