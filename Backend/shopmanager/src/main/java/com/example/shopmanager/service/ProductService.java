package com.example.shopmanager.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.Product;
import com.example.shopmanager.repository.JdbcManager;
import com.example.shopmanager.repository.ProductRepository;

@Service
public class ProductService {
	private final ProductRepository repo;

	public ProductService(ProductRepository repo) {
		this.repo = repo;
	}

	public List<Product> findAll() {
		return repo.findAll();
	}

	public Optional<Product> findById(String id) {
		return repo.findById(id);
	}

	public Product create(Product product) {
		return repo.save(product);
	}

	public Product update(String id, Product product) {
		product.setIdProduct(id);
		return repo.save(product);
	}

	public void delete(String id) {
		repo.deleteById(id);
	}

	public List<Product> getAllProductsWithBrand() {
		List<Product> products = JdbcManager.from(Product.class).innerJoin("brand").innerJoin("category")
				.where("e.nameProduct = :name", "name", "Quần short").getResultList();
		return products;
	}
}
