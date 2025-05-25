package com.example.shopmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.ShoppingCart;
import com.example.shopmanager.repository.ShoppingCartRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ShoppingCartService {

    @Autowired
    private ShoppingCartRepository repository;

    public List<ShoppingCart> findAll() {
        return repository.findAll();
    }

    public Optional<ShoppingCart> findById(String id) {
        return repository.findById(id);
    }

    public ShoppingCart save(ShoppingCart cart) {
        return repository.save(cart);
    }

    public void deleteById(String id) {
        repository.deleteById(id);
    }
}
