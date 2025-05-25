package com.example.shopmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.Color;

@Repository
public interface ColorRepository extends JpaRepository<Color, String> {
	@Query("SELECT MAX(idColor) FROM Color")
	String getMaxId();
}
