package com.example.shopmanager.service;

import com.example.shopmanager.entity.Price;
import com.example.shopmanager.entity.ProductVariant;
import com.example.shopmanager.repository.PriceRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PriceService {

    private final PriceRepository priceRepository;

    public PriceService(PriceRepository priceRepository) {
        this.priceRepository = priceRepository;
    }

    // Lấy tất cả giá
    public List<Price> findAll() {
        return priceRepository.findAll();
    }

    // Lấy giá theo ID
    public Optional<Price> findById(String id) {
        return priceRepository.findById(id);
    }

    // Lấy giá theo variant
    public List<Price> findByVariant(ProductVariant variant) {
        return priceRepository.findByProductVariant(variant);
    }

    // Lấy giá mới nhất theo variant
    public Price findLatestByVariant(ProductVariant variant) {
        return priceRepository.findFirstByProductVariantOrderByDateDesc(variant);
    }

    // Lấy giá ACTIVE theo variant
    public List<Price> findActivePrices(ProductVariant variant) {
        return priceRepository.findByProductVariantAndStatus(variant, 1);
    }

    // Tạo giá mới và vô hiệu hóa các giá cũ
    public Price createNewPrice(Price newPrice) {
        // Vô hiệu hoá tất cả các giá ACTIVE hiện tại
        List<Price> activePrices = priceRepository.findByProductVariantAndStatus(newPrice.getProductVariant(), 1);
        for (Price old : activePrices) {
            old.setStatus(0); // INACTIVE
        }
        priceRepository.saveAll(activePrices);

        // Gán ID, thời gian và lưu giá mới
        newPrice.setIdPrice(UUID.randomUUID().toString());
        newPrice.setDate(LocalDateTime.now());
        newPrice.setStatus(1); // ACTIVE

        return priceRepository.save(newPrice);
    }

    // Xoá giá theo ID
    public void delete(String id) {
        priceRepository.deleteById(id);
    }
}
