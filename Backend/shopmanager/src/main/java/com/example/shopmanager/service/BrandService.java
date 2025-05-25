package com.example.shopmanager.service;

import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.Brand;
import com.example.shopmanager.repository.BrandRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BrandService {
	private final BrandRepository repo;

	public BrandService(BrandRepository repo) {
		this.repo = repo;
	}

	public List<Brand> findAll() {
		return repo.findAll();
	}

	public Optional<Brand> findById(String id) {
		return repo.findById(id);
	}

	public Brand create(Brand brand) {
		return repo.save(brand);
	}

	public Brand update(String id, Brand brand) {
		brand.setIdBrand(id);
		return repo.save(brand);
	}

	public void delete(String id) {
		repo.deleteById(id);
	}
}
