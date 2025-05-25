package com.example.shopmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.Promotion;
import com.example.shopmanager.repository.PromotionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PromotionService {

	@Autowired
	private PromotionRepository repository;

	public List<Promotion> findAll() {
		return repository.findAll();
	}

	public Optional<Promotion> findById(String id) {
		return repository.findById(id);
	}

	public Promotion save(Promotion promotion) {
		return repository.save(promotion);
	}

	public void deleteById(String id) {
		repository.deleteById(id);
	}
}
