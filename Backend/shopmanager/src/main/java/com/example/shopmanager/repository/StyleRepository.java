package com.example.shopmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.Style;

@Repository
public interface StyleRepository extends JpaRepository<Style, String> {
	@Query("SELECT MAX(idStyle) FROM Style")
	String getMaxId();
}
