package com.example.shopmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.PurchaseSlip;
import com.example.shopmanager.entity.User;
import com.example.shopmanager.repository.PurchaseSlipRepository;
import com.example.shopmanager.repository.SqlRepositoryBuilder;

import java.util.List;
import java.util.Optional;

@Service
public class PurchaseSlipService {
    private final PurchaseSlipRepository repo;
	@Autowired
	private SqlRepositoryBuilder<PurchaseSlip> sqlRepositoryBuilder;

    public PurchaseSlipService(PurchaseSlipRepository repo) {
        this.repo = repo;
    }

    public List<PurchaseSlip> findAll() {
		return sqlRepositoryBuilder.from(PurchaseSlip.class).getListResult();
        //return repo.findAll();
    }

    public Optional<PurchaseSlip> findById(String id) {
        return repo.findById(id);
    }

    public PurchaseSlip create(PurchaseSlip slip) {
        return repo.save(slip);
    }

    public PurchaseSlip update(String id, PurchaseSlip slip) {
        slip.setIdPurchaseSlip(id);
        return repo.save(slip);
    }

    public void delete(String id) {
        repo.deleteById(id);
    }
}
