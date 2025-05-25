package com.example.shopmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.ShopInventory;
import com.example.shopmanager.entity.ShopInventoryId;

@Repository
public interface ShopInventoryRepository extends JpaRepository<ShopInventory, ShopInventoryId> {
}
