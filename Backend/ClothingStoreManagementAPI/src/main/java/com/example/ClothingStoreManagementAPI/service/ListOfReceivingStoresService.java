package com.example.ClothingStoreManagementAPI.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.ClothingStoreManagementAPI.repository.ListOfReceivingStoresRepository;
import com.example.ClothingStoreManagementAPI.model.Entity.ListOfReceivingStores;
import java.util.*;
@Service
public class ListOfReceivingStoresService {
	@Autowired
	private ListOfReceivingStoresRepository ListOfReceivingStoresRepository;
	@Autowired
	private Common common;
	@Transactional(readOnly = true)
	public List<ListOfReceivingStores> SellectListOfReceivingStores(String idPurchaseSlip){
		try {
			return ListOfReceivingStoresRepository.SellectListOfReceivingStores(idPurchaseSlip);
		}
		catch(Exception e) {
			System.out.print("SellectListOfReceivingStores, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional
	public boolean InsertListOfReceivingStores(ListOfReceivingStores ListOfReceivingStores) {
		try {
			String idcurrent = ListOfReceivingStoresRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(ListOfReceivingStores.class);
			ListOfReceivingStores.setIdList(newId);
			ListOfReceivingStoresRepository.save(ListOfReceivingStores); // thêm brand vào csdl
			ListOfReceivingStoresRepository.flush();
			return ListOfReceivingStoresRepository.existsById(newId); // trạng thái tồn tại của object mới
		}
		catch(Exception e) {
			System.out.print("InsertListOfReceivingStores, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean UpdateListOfReceivingStores(ListOfReceivingStores ListOfReceivingStores) {
		try {
			return ListOfReceivingStoresRepository.UpdateListOfReceivingStores(ListOfReceivingStores.getIdList(), ListOfReceivingStores.getIdPurchaseSlip(), 
					ListOfReceivingStores.getIdShop(), ListOfReceivingStores.isStatus()) >0;
		}
		catch(Exception e) {
			System.out.print("UpdateListOfReceivingStores, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteListOfReceivingStores(String idList) {
		try {
			ListOfReceivingStoresRepository.deleteById(idList);
			return !ListOfReceivingStoresRepository.existsById(idList);
		}
		catch(Exception e) {
			System.out.print("DeleteListOfReceivingStores, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteListOfReceivingStoresidPurchaseSlip (String idPurchaseSlip) {
		try {
			return ListOfReceivingStoresRepository.DeleteListOfDeliveryStoresByidSalesSlip(idPurchaseSlip) > 0;
		}
		catch(Exception e) {
			System.out.print("DeleteListOfDeliveryStores, Error : " + e.getMessage());
			return false;
		}
	}
}
