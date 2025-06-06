package com.example.ClothingStoreManagementAPI.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.repository.ShopRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import com.example.ClothingStoreManagementAPI.model.Entity.Shop;
import java.util.*;

@Service
public class ShopService {

	@Autowired
	private ShopRepository shopRepository;
	@Autowired
	private Common common;
	@Autowired
	private EntityManager entityManager;

	public List<Shop> SelectAllShop(int limit, int offset) {
		try {
			Query query = entityManager.createQuery("SELECT s FROM Shop s", Shop.class);
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

	public Optional<Shop> getShop (String idShop) {
		return shopRepository.findById(idShop);
	}
	public List<Shop> SellectShop(String query, int limit, int offset) {
		try {
			Query query1 = entityManager
					.createQuery("SELECT s FROM Shop s WHERE nameShop like :query or address like :query", Shop.class);
			if (offset > 0) {
				query1.setFirstResult(offset); // OFFSET

			}
			if (limit > 0) {
				query1.setMaxResults(limit); // LIMIT

			}
			query1.setParameter("query", "%" + query + "%");// LIMIT
			return query1.getResultList();
		} catch (Exception e) {
			System.out.print("UpdateColor, Error : " + e.getMessage());
			return null;
		}
	}

	public boolean InsertShop(Shop Shop) {
		try {
			String idcurrent = shopRepository.SelectMaxId();
			String newId = idcurrent != null ? common.FindNextId(idcurrent) : common.GetFirstId(Shop.class);
			Shop.setIdShop(newId);
			shopRepository.save(Shop); // thêm brand vào csdl
			shopRepository.flush();
			return shopRepository.existsById(newId); // trạng thái tồn tại của object mới
		} catch (Exception e) {
			System.out.print("InsertColor, Error : " + e.getMessage());
			return false;
		}
	}

	@Transactional
	public boolean UpdateShop(Shop Shop) {
		try {
			return shopRepository.UpdateShop(Shop.getIdShop(), Shop.getNameShop(), Shop.getAddress(),
					Shop.getOpeningTime(), Shop.getClosingTime(), Shop.isStatus()) > 0;
		} catch (Exception e) {
			System.out.print("UpdateColor, Error : " + e.getMessage());
			return false;
		}
	}

	@Transactional
	public boolean deleteShop(Shop Shop) {
		try {
			shopRepository.delete(Shop);
			return true;
		} catch (Exception e) {
			System.out.print("UpdateColor, Error : " + e.getMessage());
			return false;
		}
	}
}
