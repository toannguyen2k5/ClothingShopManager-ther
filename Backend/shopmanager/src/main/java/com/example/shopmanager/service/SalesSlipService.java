package com.example.shopmanager.service;

import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.SalesSlip;
import com.example.shopmanager.repository.SalesSlipRepository;

import java.util.List;
import java.util.Optional;

@Service
public class SalesSlipService {
	private final SalesSlipRepository repo;

	public SalesSlipService(SalesSlipRepository repo) {
		this.repo = repo;
	}

	public List<SalesSlip> findAll() {
		return repo.findAll();
	}

	public Optional<SalesSlip> findById(String id) {
		return repo.findById(id);
	}

	public SalesSlip create(SalesSlip slip) {
		return repo.save(slip);
	}

	public SalesSlip update(String id, SalesSlip slip) {
		slip.setIdSalesSlip(id);
		return repo.save(slip);
	}

	public void delete(String id) {
		repo.deleteById(id);
	}
}
