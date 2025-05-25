package com.example.shopmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.ShopInventory;
import com.example.shopmanager.repository.ShopInventoryRepository;

import java.util.List;

@Service
public class ShopInventoryService {

	@Autowired
	private ShopInventoryRepository repository;

	public List<ShopInventory> findAll() {
		return repository.findAll();
	}

	public ShopInventory save(ShopInventory inventory) {
		return repository.save(inventory);
	}

	public void delete(ShopInventory inventory) {
		repository.delete(inventory);
	}
}
