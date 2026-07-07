package com.example.ClothingStoreManagementAPI.service;
import java.time.LocalDate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.ClothingStoreManagementAPI.repository.DiscountEventRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import com.example.ClothingStoreManagementAPI.model.Entity.DiscountEvent;
import java.util.*;

@Service
public class DiscountEventService {

    @Autowired
    private DiscountEventRepository discountEventRepository;
    @Autowired
    private Common common;
    @Autowired
    private EntityManager entityManager;
    @Transactional(readOnly = true)
    public List<DiscountEvent> SellectAllDiscountEvent(int limit, int offset) {
        try {
            Query query = entityManager.createNativeQuery("SELECT * FROM DiscountEvent", DiscountEvent.class);
            if (offset > 0)
				query.setFirstResult(offset); // OFFSET
			if (limit > 0)
				query.setMaxResults(limit); // LIMIT
            return query.getResultList();
        } catch (Exception e) {
            System.out.print("SellectAllDiscountEvent, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional(readOnly = true)
    public List<DiscountEvent> SellectDiscountEvent(String query, int limit, int offset) {
        try {
            Query query1 = entityManager.createQuery("SELECT d FROM DiscountEvent d WHERE (d.idProduct like :query or d.description like :query or d.eventCode like :query) and d.eventDeadline > :now", DiscountEvent.class);
            if (offset > 0)
				query1.setFirstResult(offset); // OFFSET
			if (limit > 0)
				query1.setMaxResults(limit); // LIMIT
            query1.setParameter("query", "%" + query + "%");// LIMIT
            query1.setParameter("now",LocalDate.now());
            return query1.getResultList();
        } catch (Exception e) {
            System.out.print("SellectDiscountEvent, Error : " + e.getMessage());
            return null;
        }
    }
    @Transactional
    public boolean InsetDiscountEvent(DiscountEvent discountEvent) {
        try {
            if (SellectDiscountEvent(discountEvent.getEventCode(), 1, 0).size() > 0) {
                return false;
            }
            String idcurrent = discountEventRepository.SelectMaxId();
            String newId = idcurrent != null ? common.FindNextId(idcurrent) : common.GetFirstId(DiscountEvent.class);
            discountEvent.setIdEvent(newId);
            discountEventRepository.save(discountEvent); // thêm brand vào csdl
            discountEventRepository.flush();
            return discountEventRepository.existsById(newId); // trạng thái tồn tại của object mới
        } catch (Exception e) {
            System.out.print("InsetDiscountEvent, Error : " + e.getMessage());
            return false;
        }
    }
    @Transactional
    public boolean UpdateDiscountEvent(DiscountEvent discountEvent) {
        try {
            return discountEventRepository.UpdateDiscountEvent(discountEvent.getIdEvent(), discountEvent.getEventCode(), discountEvent.getIdProduct(),
                    discountEvent.getDecrease(), discountEvent.getQuantityLimit(), discountEvent.getEventDeadline(), discountEvent.getDescription()) > 0;
        } catch (Exception e) {
            System.out.print("UpdateDiscountEvent, Error : " + e.getMessage());
            return false;
        }
    }
    @Transactional
    public boolean DeleteDiscountEvent(String idEvent) {
        try {
            discountEventRepository.deleteById(idEvent);// xóa sự kiện
            return !discountEventRepository.existsById(idEvent);
        } catch (Exception e) {
            System.out.print("DeleteDiscountEvent, Error : " + e.getMessage());
            return false;
        }
    }
}
