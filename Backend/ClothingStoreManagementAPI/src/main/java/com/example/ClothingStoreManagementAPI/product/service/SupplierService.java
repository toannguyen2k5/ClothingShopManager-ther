package com.example.ClothingStoreManagementAPI.product.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.product.repository.SupplierRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import com.example.ClothingStoreManagementAPI.product.model.Entity.ProductCategory;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Shop;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Supplier;
import java.util.*;

@Service
public class SupplierService {

    @Autowired
    private SupplierRepository SupplierRepository;
    @Autowired
    private Common common;
    @Autowired
    private EntityManager entityManager;

    public String SelectIdSupplier(String nameSupplier) {
        return SupplierRepository.SelectIdSupplier(nameSupplier);
    }

    public List<Supplier> SelectAllSupplier(int limit, int offset) {
        try {
            Query query = entityManager.createNativeQuery("SELECT * FROM Supplier", Supplier.class);
            if (offset > 0)
				query.setFirstResult(offset); // OFFSET
			if (limit > 0)
				query.setMaxResults(limit); // LIMIT
            return query.getResultList();
        } catch (Exception e) {
            System.out.print("SelectAllSupplier, Error : " + e.getMessage());
            return null;
        }
    }

    public List<Supplier> SellectSupplier(String query, int limit, int offset) {
        try {
            Query query1 = entityManager.createQuery("SELECT s FROM Supplier s WHERE s.nameSupplier like :query or s.contactName like :queryor s.phoneNumber like :queryor s.email like :query", Supplier.class);
            if (offset > 0) {
                query1.setFirstResult(offset);
                }
            if (limit > 0) {
                query1.setMaxResults(limit);
                }
            query1.setParameter("query", "%" + query + "%");// LIMIT
            return query1.getResultList();
        } catch (Exception e) {
            System.out.print("SellectSupplier, Error : " + e.getMessage());
            return null;
        }
    }
    
    public Supplier SellectSupplier(String id) {
            Optional<Supplier> Supplier =  SupplierRepository.findById(id);
            if(Supplier != null)  return Supplier.get(); else return null;
    }

    public boolean InsertSupplier(Supplier Supplier) {
        try {
            String idcurrent = SupplierRepository.SelectMaxId();
            String newId = idcurrent != null ? common.FindNextId(idcurrent) : common.GetFirstId(Supplier.class);
            Supplier.setIdSupplier(newId);
            SupplierRepository.save(Supplier); // thêm brand vào csdl
            SupplierRepository.flush();
            return SupplierRepository.existsById(newId); // trạng thái tồn tại của object mới
        } catch (Exception e) {
            System.out.print("InsertSupplier, Error : " + e.getMessage());
            return false;
        }
    }
    @Transactional
    public boolean UpdateSupplier(Supplier Supplier) {
        try {
            return SupplierRepository.UpdateSupplier(Supplier.getIdSupplier(), Supplier.getNameSupplier(), Supplier.getContactName(), Supplier.getPhoneNumber(),
                    Supplier.getEmail(), Supplier.getAddress(), Supplier.isStatus()) > 0;
        } catch (Exception e) {
            System.out.print("UpdateSupplier, Error : " + e.getMessage());
            return false;
        }
    }
}
