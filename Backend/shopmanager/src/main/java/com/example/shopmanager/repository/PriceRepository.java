package com.example.shopmanager.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.Price;
import com.example.shopmanager.entity.ProductVariant;

@Repository
public interface PriceRepository extends JpaRepository<Price, String> {
	@Query("SELECT MAX(idPrice) FROM Price")
	String getMaxId();
	// Lấy danh sách giá theo variant
    List<Price> findByProductVariant(ProductVariant variant);

    // Lấy các bản ghi giá ACTIVE theo variant
    List<Price> findByProductVariantAndStatus(ProductVariant variant, int status);

    // Lấy bản ghi giá mới nhất (theo updated_at) cho variant
    Price findFirstByProductVariantOrderByDateDesc(ProductVariant variant);
}
