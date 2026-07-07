package com.example.ClothingStoreManagementAPI.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.repository.ProductMaterialRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import com.example.ClothingStoreManagementAPI.model.Entity.Color;
import com.example.ClothingStoreManagementAPI.model.Entity.ProductCategory;
import com.example.ClothingStoreManagementAPI.model.Entity.ProductMaterial;
import java.util.*;

@Service
public class ProductMaterialService {

    @Autowired
    private ProductMaterialRepository ProductMaterialRepository;
    @Autowired
    private Common common;
    @Autowired
    private EntityManager entityManager;
    @Transactional(readOnly = true)
    public String SelectIdMaterial(String nameProductMaterial) {
        try {
            return ProductMaterialRepository.SelectidMaterial(nameProductMaterial);
        } catch (Exception e) {
            System.out.print("SelectIdProductMaterial, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional(readOnly = true)
    public List<ProductMaterial> SelectAllProductMaterial(int limit, int offset) {
        try {
            Query query = entityManager.createQuery("SELECT p FROM ProductMaterial p", ProductMaterial.class);
            if (offset > 0)
				query.setFirstResult(offset); // OFFSET
			if (limit > 0)
				query.setMaxResults(limit); // LIMIT
            return query.getResultList();
        } catch (Exception e) {
            System.out.print("SelectAllProductMaterial, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional(readOnly = true)
    public List<ProductMaterial> SellectProductMaterial(String query, int limit, int offset) {
        try {
            Query query1 = entityManager.createQuery("SELECT idMaterial, nameMaterial, description FROM ProductMaterial WHERE nameMaterial like :query or description like :query", ProductMaterial.class);
            if (offset > 0) {
                query1.setFirstResult(offset);
                }
            if (limit > 0) {
                query1.setMaxResults(limit);
                }
            query1.setParameter("query", "%" + query + "%");// LIMIT
            return query1.getResultList();
        } catch (Exception e) {
            System.out.print("SellectProductMaterial, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional
    public boolean InsertProductMaterial(ProductMaterial ProductMaterial) {
        try {
            if (SelectIdMaterial(ProductMaterial.getNameMaterial()) != null) {
                return false;
            }
            String idcurrent = ProductMaterialRepository.SelectMaxId();
            String newId = idcurrent != null ? common.FindNextId(idcurrent) : common.GetFirstId(ProductMaterial.class);
            ProductMaterial.setIdMaterial(newId);
            ProductMaterialRepository.save(ProductMaterial); // thêm ProductMaterial vào csdl
            ProductMaterialRepository.flush();
            return ProductMaterialRepository.existsById(newId); // trạng thái tồn tại của object mới
        } catch (Exception e) {
            System.out.print("InsertProductMaterial, Error : " + e.getMessage());
            return false;
        }
    }
    @Transactional
    public boolean UpdateProductMaterial(ProductMaterial ProductMaterial) {
        try {
            return ProductMaterialRepository.UpdateProductMaterial(ProductMaterial.getIdMaterial(), ProductMaterial.getNameMaterial(), ProductMaterial.getDescription()) > 0;
        } catch (Exception e) {
            System.out.print("UpdateProductMaterial, Error : " + e.getMessage());
            return false;
        }
    }
}
