package com.example.ClothingStoreManagementAPI.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.*;
import com.example.ClothingStoreManagementAPI.repository.BrandRepository;
import jakarta.persistence.Query;

import jakarta.persistence.EntityManager;

import com.example.ClothingStoreManagementAPI.model.Entity.Brand;
import java.util.*;

@Service
public class BrandService {

    @Autowired
    private BrandRepository brandRepository;
    @Autowired
    private Common common;
    @Autowired
    private EntityManager entityManager;
    @Transactional(readOnly = true)
    public String SelectIdBrand(String nameBrand) {
        try {
            return brandRepository.SelectIdBrand(nameBrand);
        } catch (Exception e) {
            System.out.print("SelectIdBrand, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional(readOnly = true)
    public List<Brand> SelectAllBrand(int limit, int offset) {
        try {
            Query query = entityManager.createQuery("SELECT b FROM Brand b", Brand.class);
            if (offset > 0) {
                query.setFirstResult(offset);
               }
            if (limit > 0) {
                query.setMaxResults(limit);
               }
            return query.getResultList();
        } catch (Exception e) {
            System.out.print("SelectAllBrand, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional(readOnly = true)
    public List<Brand> SellectBrand(String query, int limit, int offset) {
        try {
            Query query1 = entityManager.createQuery("SELECT b FROM Brand b WHERE b.nameBrand like :query or b.description like :query", Brand.class);
            if (offset > 0) {
                query1.setFirstResult(offset);
                }
            if (limit > 0) {
                query1.setMaxResults(limit);
                }
            query1.setParameter("query", "%" + query + "%");
            return query1.getResultList();
        } catch (Exception e) {
            System.out.print("SellectBrand, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional(readOnly = true)
    public Brand SellectBrandById(String id) {
        try {
        	Optional<Brand> brand = brandRepository.findById(id);
        	if(!brand.isEmpty()) return brand.get();
        	else return null;
        } catch (Exception e) {
            System.out.print("SellectBrand, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional
    public boolean InsertBrand(Brand brand) {
        try {
            if (SellectBrand(brand.getNameBrand(), 1, 0).size() > 0) {
                return false;
            }
            String idcurrent = brandRepository.SelectMaxId();
            String newId = idcurrent != null ? common.FindNextId(idcurrent) : common.GetFirstId(Brand.class);
            brand.setIdBrand(newId);
            brandRepository.save(brand); // thêm brand vào csdl
            brandRepository.flush();
            return brandRepository.existsById(newId); // trạng thái tồn tại của object mới
        } catch (Exception e) {
            System.out.print("InsertBrand, Error : " + e.getMessage());
            return false;
        }
    }

    @Transactional
    public boolean UpdateBrand(Brand brand) {
        try {
            return brandRepository.UpdateBrand(brand.getIdBrand(), brand.getNameBrand(), brand.getDescription()) > 0;
        } catch (Exception e) {
            System.out.print("UpdateBrand, Error : " + e.getMessage());
            return false;
        }
    }
}
