package com.example.shopmanager.service;

import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.Supplier;
import com.example.shopmanager.repository.SupplierRepository;

import java.util.List;
import java.util.Optional;

@Service
public class SupplierService {
    private final SupplierRepository repo;

    public SupplierService(SupplierRepository repo) {
        this.repo = repo;
    }

    public List<Supplier> findAll() {
        return repo.findAll();
    }

    public Optional<Supplier> findById(String id) {
        return repo.findById(id);
    }

    public Supplier create(Supplier supplier) {
        return repo.save(supplier);
    }

    public Supplier update(String id, Supplier supplier) {
        supplier.setIdSupplier(id);
        return repo.save(supplier);
    }

    public void delete(String id) {
        repo.deleteById(id);
    }
}
