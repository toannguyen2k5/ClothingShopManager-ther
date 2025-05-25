package com.example.shopmanager.controller;

import com.example.shopmanager.entity.Category;
import com.example.shopmanager.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

	private final CategoryService categoryService;

	public CategoryController(CategoryService categoryService) {
		this.categoryService = categoryService;
	}

	// Lấy tất cả danh mục
	@GetMapping
	public ResponseEntity<List<Category>> getAllCategories() {
		return ResponseEntity.ok(categoryService.findAll());
	}

	// Lấy danh mục theo ID
	@GetMapping("/{id}")
	public ResponseEntity<Category> getCategoryById(@PathVariable String id) {
		return categoryService.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	}

	// Tạo danh mục mới
	@PostMapping
	public ResponseEntity<Category> createCategory(@RequestBody Category category) {
		Category createdCategory = categoryService.create(category);
		return ResponseEntity.ok(createdCategory);
	}

	// Cập nhật danh mục theo ID
	@PutMapping("/{id}")
	public ResponseEntity<Category> updateCategory(@PathVariable String id, @RequestBody Category category) {
		Category updatedCategory = categoryService.update(id, category);
		return ResponseEntity.ok(updatedCategory);
	}

	// Xóa danh mục theo ID
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteCategory(@PathVariable String id) {
		categoryService.delete(id);
		return ResponseEntity.noContent().build();
	}
}
