package com.example.ClothingStoreManagementAPI.service;
import org.springframework.stereotype.Service;
import java.util.*;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.ClothingStoreManagementAPI.repository.ListWarehouseInChargeRepository;
import com.example.ClothingStoreManagementAPI.model.Entity.ListWarehouseInCharge;
import com.example.ClothingStoreManagementAPI.model.Entity.Shop;
@Service
public class ListWarehouseInChargeService {
	@Autowired
	private ListWarehouseInChargeRepository ListWarehouseInChargeRepository;
	@Autowired
	private Common common;
	@Transactional(readOnly = true)
	public List<Shop> SellectListWarehouseInCharge(String idUser) {
		try {
			return ListWarehouseInChargeRepository.SellectListWarehouseInCharge(idUser);
		}
		catch(Exception e) {
			System.out.print("InsertListWarehouseInCharge, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional
	public boolean InsertListWarehouseInCharge(ListWarehouseInCharge ListWarehouseInCharge) {
		try {
			String idcurrent = ListWarehouseInChargeRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(ListWarehouseInCharge.class);
			ListWarehouseInCharge.setIdList(newId);
			ListWarehouseInChargeRepository.save(ListWarehouseInCharge); // thêm brand vào csdl
			ListWarehouseInChargeRepository.flush();
			return ListWarehouseInChargeRepository.existsById(newId); // trạng thái tồn tại của object mới
		}
		catch(Exception e) {
			System.out.print("InsertListWarehouseInCharge, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean UpdateListWICByIds(String idList,String idShop) {
		try {
			return ListWarehouseInChargeRepository.UpdateWarehouseInCharge(idList,idShop) >0;
		}
		catch(Exception e) {
			System.out.print("UpdateListWICByIds, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean UpdateListWICByNumbers(String idList,String cccdNumber, String motorbikeNumber) {
		try {
			return ListWarehouseInChargeRepository.UpdateWarehouseInCharge(idList,cccdNumber,motorbikeNumber) >0;
		}
		catch(Exception e) {
			System.out.print("UpdateListWICByNumbers, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteListWarehouseInCharge(String idDetail) {
		ListWarehouseInChargeRepository.deleteById(idDetail);
		return !ListWarehouseInChargeRepository.existsById(idDetail);
	}
}
