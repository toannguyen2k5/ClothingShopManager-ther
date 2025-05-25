package com.example.shopmanager.repository;

import com.example.shopmanager.entity.Material;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MaterialRepository extends JpaRepository<Material, String> {
	@Query("SELECT MAX(idMaterial) FROM Material")
	String getMaxId();
}
