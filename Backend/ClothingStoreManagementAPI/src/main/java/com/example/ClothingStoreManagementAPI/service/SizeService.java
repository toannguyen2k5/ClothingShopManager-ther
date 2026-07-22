package com.example.ClothingStoreManagementAPI.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.repository.SizeRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import com.example.ClothingStoreManagementAPI.model.Entity.ProductMaterial;
import com.example.ClothingStoreManagementAPI.model.Entity.Size;
import java.util.*;
@Service
public class SizeService {
	@Autowired
	private SizeRepository SizeRepository;
	@Autowired
	private Common common;
	@Autowired
	private EntityManager entityManager;
	public String SelectIdSize(String nameSize) {
		try {
			return SizeRepository.SelectIdSize(nameSize);
		}
		catch(Exception e) {
			System.out.print("SelectIdSize, Error : " + e.getMessage());
			return null;
		}
	}
	public List<Size> SelectAllSize(int limit, int offset){
		try {
			Query query = entityManager.createQuery("SELECT s  FROM Size s", Size.class);
			if (offset > 0) {
                query.setFirstResult(offset);
                }
            if (limit > 0) {
                query.setMaxResults(limit);
                }
		    return query.getResultList();
		}
		catch(Exception e) {
			System.out.print("SelectAllSize, Error : " + e.getMessage());
			return null;
		}
	}
	public List<Size> SellectSize(String query,int limit, int offset){
		try {
			Query query1 = entityManager.createQuery("SELECT idSize, nameSize, description FROM Size WHERE nameSize like :query or description like :query", Size.class);
			if (offset > 0) {
                query1.setFirstResult(offset);
                }
            if (limit > 0) {
                query1.setMaxResults(limit);
                }
		    query1.setParameter("query","%"+ query + "%");// LIMIT
		    return query1.getResultList();
		}
		catch(Exception e) {
			System.out.print("SellectSize, Error : " + e.getMessage());
			return null;
		}
	}
    @Transactional(readOnly = true)
    public Size SellectSizeById(String id) {
        try {
        	Optional<Size> Size = SizeRepository.findById(id);
        	if(!Size.isEmpty()) return Size.get();
        	else return null;
        } catch (Exception e) {
            System.out.print("SellectBrand, Error : " + e.getMessage());
            return null;
        }
    }
	public boolean InsertSize(Size Size){
		try {
				if(SelectIdSize(Size.getNameSize()) != null) {
					return false;
				}
				String idcurrent = SizeRepository.SelectMaxId();
				String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(Size.class);
				Size.setIdSize(newId);
				SizeRepository.save(Size); // thêm Size vào csdl
				SizeRepository.flush();
				return SizeRepository.existsById(newId); // trạng thái tồn tại của object mới
			}
		catch(Exception e) {
			System.out.print("InsertSize, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean UpdateSize(Size Size) {
		try {
			return SizeRepository.UpdateSize(Size.getIdSize(), Size.getNameSize(), Size.getDescription())>0;
		}
		catch(Exception e) {
			System.out.print("UpdateSize, Error : " + e.getMessage());
			return false;
		}
	}
}
