package com.example.ClothingStoreManagementAPI.product.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.product.repository.StyleRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import com.example.ClothingStoreManagementAPI.product.model.Entity.ProductCategory;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Shop;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Size;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Style;
import java.util.*;

@Service
public class StyleService {

    @Autowired
    private StyleRepository StyleRepository;
    @Autowired
    private Common common;
    @Autowired
    private EntityManager entityManager;

    public String SelectIdStyle(String nameStyle) {
        try {
            return StyleRepository.SelectIdStyle(nameStyle);
        } catch (Exception e) {
            System.out.print("UpdateColor, Error : " + e.getMessage());
            return null;
        }
    }

    public List<Style> SelectAllStyle(int limit, int offset) {
        try {
            Query query = entityManager.createQuery("SELECT s  FROM Style s", Style.class);
            if (offset > 0)
				query.setFirstResult(offset); // OFFSET
			if (limit > 0)
				query.setMaxResults(limit); // LIMIT
            return query.getResultList();
        } catch (Exception e) {
            System.out.print("UpdateColor, Error : " + e.getMessage());
            return null;
        }
    }

    public List<Style> SellectStyle(String query, int limit, int offset) {
        try {
            Query query1 = entityManager.createQuery("SELECT s FROM Style s WHERE s.nameStyle like :query or s.description like :query", Style.class);
            if (offset > 0) {
                query1.setFirstResult(offset);
                }
            if (limit > 0) {
                query1.setMaxResults(limit);
                }
            query1.setParameter("query", "%" + query + "%");// LIMIT
            return query1.getResultList();
        } catch (Exception e) {
            System.out.print("UpdateColor, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional(readOnly = true)
    public Style SellectSizeById(String id) {
        try {
        	Optional<Style> Style = StyleRepository.findById(id);
        	if(!Style.isEmpty()) return Style.get();
        	else return null;
        } catch (Exception e) {
            System.out.print("SellectBrand, Error : " + e.getMessage());
            return null;
        }
    }
    public boolean InsertStyle(Style Style) {
        try {
            if (SelectIdStyle(Style.getNameStyle())!= null) {
                return false;
            }
            String idcurrent = StyleRepository.SelectMaxId();
            String newId = idcurrent != null ? common.FindNextId(idcurrent) : common.GetFirstId(Style.class);
            Style.setIdStyle(newId);
            StyleRepository.save(Style); // thêm brand vào csdl
            StyleRepository.flush();
            return StyleRepository.existsById(newId); // trạng thái tồn tại của object mới
        } catch (Exception e) {
            System.out.print("UpdateColor, Error : " + e.getMessage());
            return false;
        }
    }
    @Transactional
    public boolean UpdateStyle(Style Style) {
        try {
            return StyleRepository.UpdateStyle(Style.getIdStyle(), Style.getNameStyle(), Style.getDescription()) > 0;
        } catch (Exception e) {
            System.out.print("UpdateColor, Error : " + e.getMessage());
            return false;
        }
    }
}
