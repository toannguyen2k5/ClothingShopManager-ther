package com.example.ClothingStoreManagementAPI.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.repository.ProductCategoryRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import com.example.ClothingStoreManagementAPI.model.Entity.Brand;
import com.example.ClothingStoreManagementAPI.model.Entity.ProductCategory;
import java.util.*;

@Service
public class ProductCategoryService {

    @Autowired
    private ProductCategoryRepository ProductCategoryRepository;
    @Autowired
    private Common common;
    @Autowired
    private EntityManager entityManager;
    @Transactional(readOnly = true)
    public String SelectIdProductCategory(String nameProductCategory) {
        try {
            return ProductCategoryRepository.SelectIdProductCategory(nameProductCategory);
        } catch (Exception e) {
            System.out.print("SelectIdProductCategory, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional(readOnly = true)
    public List<ProductCategory> SelectAllProductCategory(int limit, int offset) {
        try {
            Query query = entityManager.createQuery("SELECT p FROM ProductCategory p", ProductCategory.class);
            if (offset > 0)
				query.setFirstResult(offset); // OFFSET
			if (limit > 0)
				query.setMaxResults(limit); // LIMIT
            return query.getResultList();
        } catch (Exception e) {
            System.out.print("SelectAllProductCategory, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional(readOnly = true)
    public List<ProductCategory> SellectProductCategory(String query, int limit, int offset) {
        try {
            Query query1 = entityManager.createQuery("SELECT P FROM ProductCategory P WHERE nameCategory like :query or description like :query", ProductCategory.class);
            if (offset > 0) {
                query1.setFirstResult(offset);
                }
            if (limit > 0) {
                query1.setMaxResults(limit);
                }
            query1.setParameter("query", "%" + query + "%");// LIMIT
            return query1.getResultList();
        } catch (Exception e) {
            System.out.print("SellectProductCategory, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional
    public String InsertProductCategory(ProductCategory ProductCategory) {
        try {
            if (SelectIdProductCategory(ProductCategory.getNameCategory()) != null) {
                return "";
            }
            String idcurrent = ProductCategoryRepository.SelectMaxId();
            String newId = idcurrent != null ? common.FindNextId(idcurrent) : common.GetFirstId(ProductCategory.class);
            ProductCategory.setIdCategory(newId);
            ProductCategoryRepository.save(ProductCategory); // thêm brand vào csdl
            ProductCategoryRepository.flush();
            return ProductCategoryRepository.existsById(newId)? newId : ""; // trạng thái tồn tại của object mới
        } catch (Exception e) {
            System.out.print("InsertProductCategory, Error : " + e.getMessage());
            return "";
        }
    }
    @Transactional
    public boolean UpdateProductCategory(ProductCategory ProductCategory) {
        try {
            return ProductCategoryRepository.UpdateProductCategory(ProductCategory.getIdCategory(), ProductCategory.getNameCategory(), ProductCategory.getDescription(),ProductCategory.getIdParentCategory()) > 0;
        } catch (Exception e) {
            System.out.print("UpdateProductCategory, Error : " + e.getMessage());
            return false;
        }
    }
}
