package com.example.ClothingStoreManagementAPI.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.repository.ColorRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import com.example.ClothingStoreManagementAPI.model.Entity.Brand;
import com.example.ClothingStoreManagementAPI.model.Entity.Color;
import java.util.*;

@Service
public class ColorService {

    @Autowired
    private ColorRepository colorRepository;
    @Autowired
    private Common common;
    @Autowired
    private EntityManager entityManager;
    @Transactional(readOnly = true)
    public String SelectIdColor(String nameColor) {
        try {
            return colorRepository.SelectIdColor(nameColor);
        } catch (Exception e) {
            System.out.print("SelectIdColor, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional(readOnly = true)
    public List<Color> SelectAllColor(int limit, int offset) {
        try {
            Query query = entityManager.createQuery("SELECT c FROM Color c", Color.class);
            if (offset > 0)
				query.setFirstResult(offset); // OFFSET
			if (limit > 0)
				query.setMaxResults(limit); // LIMIT
            return query.getResultList();
        } catch (Exception e) {
            System.out.print("SelectAllColor, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional(readOnly = true)
    public List<Color> SellectColor(String query, int limit, int offset) {
        try {
            Query query1 = entityManager.createQuery("SELECT c.idColor , c.nameColor, c.description FROM Color c WHERE c.nameColor like :query or c.description like :query", Color.class);
            if (offset > 0) {
                query1.setFirstResult(offset);
                }
            if (limit > 0) {
                query1.setMaxResults(limit);
                }
            query1.setParameter("query", "%" + query + "%");// LIMIT
            return query1.getResultList();
        } catch (Exception e) {
            System.out.print("SellectColor, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional
    public boolean InsertColor(Color Color) {
        try {
            if (SelectIdColor(Color.getNameColor()) != null) {
                return false;
            }
            String idcurrent = colorRepository.SelectMaxId();
            String newId = idcurrent != null ? common.FindNextId(idcurrent) : common.GetFirstId(Color.class);
            Color.setIdColor(newId);
            colorRepository.save(Color); // thêm brand vào csdl
            colorRepository.flush();
            return colorRepository.existsById(newId); // trạng thái tồn tại của object mới
        } catch (Exception e) {
            System.out.print("InsertColor, Error : " + e.getMessage());
            return false;
        }
    }
    @Transactional
    public boolean UpdateColor(Color color) {
        try {
            return colorRepository.UpdateColor(color.getIdColor(), color.getNameColor(), color.getDescription()) > 0;
        } catch (Exception e) {
            System.out.print("UpdateColor, Error : " + e.getMessage());
            return false;
        }
    }
}
