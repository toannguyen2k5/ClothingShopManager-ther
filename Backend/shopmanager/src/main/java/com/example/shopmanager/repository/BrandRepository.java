package com.example.shopmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.Brand;

@Repository
public interface BrandRepository extends JpaRepository<Brand, String> {
	@Query("SELECT MAX(idBrand) FROM Brand")
	String getMaxId();
}
