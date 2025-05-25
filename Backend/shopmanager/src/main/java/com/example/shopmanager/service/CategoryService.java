package com.example.shopmanager.service;

import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.Category;
import com.example.shopmanager.repository.CategoryRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private final CategoryRepository repo;

    public CategoryService(CategoryRepository repo) {
        this.repo = repo;
    }

    public List<Category> findAll() {
        return repo.findAll();
    }

    public Optional<Category> findById(String id) {
        return repo.findById(id);
    }

    public Category create(Category category) {
        return repo.save(category);
    }

    public Category update(String id, Category category) {
        category.setIdCategory(id);
        return repo.save(category);
    }

    public void delete(String id) {
        repo.deleteById(id);
    }
}