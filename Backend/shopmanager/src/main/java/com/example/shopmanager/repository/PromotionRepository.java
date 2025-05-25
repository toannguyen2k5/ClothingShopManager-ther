package com.example.shopmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.Promotion;

@Repository
public interface PromotionRepository extends JpaRepository<Promotion, String> {
	@Query("SELECT MAX(idPromotion) FROM Promotion")
	String getMaxId();
}
