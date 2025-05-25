package com.example.shopmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.ProductVariant;
import com.example.shopmanager.repository.ProductVariantRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductVariantService {

	@Autowired
	private ProductVariantRepository repository;

	public List<ProductVariant> findAll() {
		return repository.findAll();
	}

	public Optional<ProductVariant> findById(String id) {
		return repository.findById(id);
	}

	public ProductVariant save(ProductVariant variant) {
		return repository.save(variant);
	}

	public void deleteById(String id) {
		repository.deleteById(id);
	}
}
