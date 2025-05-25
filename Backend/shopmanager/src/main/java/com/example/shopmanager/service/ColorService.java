package com.example.shopmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.Color;
import com.example.shopmanager.repository.ColorRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ColorService {

	@Autowired
	private ColorRepository repository;

	public List<Color> findAll() {
		return repository.findAll();
	}

	public Optional<Color> findById(String id) {
		return repository.findById(id);
	}

	public Color save(Color color) {
		return repository.save(color);
	}

	public void deleteById(String id) {
		repository.deleteById(id);
	}
}
