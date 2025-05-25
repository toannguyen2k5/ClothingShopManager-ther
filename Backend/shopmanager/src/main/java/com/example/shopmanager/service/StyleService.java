package com.example.shopmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.Style;
import com.example.shopmanager.repository.StyleRepository;

import java.util.List;
import java.util.Optional;

@Service
public class StyleService {

	@Autowired
	private StyleRepository repository;

	public List<Style> findAll() {
		return repository.findAll();
	}

	public Optional<Style> findById(String id) {
		return repository.findById(id);
	}

	public Style save(Style style) {
		return repository.save(style);
	}

	public void deleteById(String id) {
		repository.deleteById(id);
	}
}
