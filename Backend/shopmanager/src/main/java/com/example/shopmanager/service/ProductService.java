package com.example.shopmanager.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.shopmanager.dto.ProductDto;
import com.example.shopmanager.dto.Product_ViewListProductDto;
import com.example.shopmanager.entity.Product;
import com.example.shopmanager.repository.JdbcManager;
import com.example.shopmanager.repository.ProductRepository;
import com.example.shopmanager.util.CommonUtil;

@Service
public class ProductService {
	private final ProductRepository repo;

	public ProductService(ProductRepository repo) {
		this.repo = repo;
	}

	public List<?> findAll() {
		List<Product_ViewListProductDto> list = new ArrayList<>();
		List<Product> products = JdbcManager.from(Product.class)
//				.join("e.productVariants", "pv")
//			    .join("pv.prices", "pr")
//			    .where("pv.idVariant = :idVariant", "idVariant", "PV001")
				.getResultList();
		for (Product product : products) {
			product.getBrand();
			product.getProductVariants().stream()
			.map(item -> item.getPrices().removeIf(itemPrice -> (itemPrice.getStatus() == false)))
			.collect(Collectors.toList());
			list.add(CommonUtil.convertToDto(product, Product_ViewListProductDto.class));

		}
		return list;
	}

	public Optional<Product> findById(String id) {
		return repo.findById(id);
	}

	public Product create(Product product) {
		return repo.save(product);
	}

	public Product update(String id, Product product) {
		product.setIdProduct(id);
		return repo.save(product);
	}

	public void delete(String id) {
		repo.deleteById(id);
	}

	public List<Product> getAllProductsWithBrand() {
		List<Product> products = JdbcManager.from(Product.class).innerJoin("brand").innerJoin("category")
				.where("e.nameProduct = :name", "name", "Quần short").getResultList();
		return products;
	}

}
