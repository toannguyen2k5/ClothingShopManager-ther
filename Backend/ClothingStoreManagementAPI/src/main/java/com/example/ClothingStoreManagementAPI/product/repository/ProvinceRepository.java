package com.example.ClothingStoreManagementAPI.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ClothingStoreManagementAPI.product.model.ConstData.Province;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

@Repository
public interface ProvinceRepository extends JpaRepository<Province, String> {
    // tìm thông tin tất cả các tỉnh
    @Query("SELECT p.nameProvince FROM Province p WHERE p.idProvince = :idProvince")
    String SellectNameProvince(@Param("idProvince") String idProvince);
}
