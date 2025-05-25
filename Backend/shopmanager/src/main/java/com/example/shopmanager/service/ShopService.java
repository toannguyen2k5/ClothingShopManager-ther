package com.example.shopmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.Shop;
import com.example.shopmanager.repository.ShopRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ShopService {

	@Autowired
	private ShopRepository repository;

	public List<Shop> findAll() {
		return repository.findAll();
	}

	public Optional<Shop> findById(String id) {
		return repository.findById(id);
	}

	public Shop save(Shop shop) {
		return repository.save(shop);
	}

	public void deleteById(String id) {
		repository.deleteById(id);
	}
}
