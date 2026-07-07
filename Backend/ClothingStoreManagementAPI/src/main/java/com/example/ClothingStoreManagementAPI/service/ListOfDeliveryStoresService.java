package com.example.ClothingStoreManagementAPI.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.repository.ListOfDeliveryStoresRepository;
import com.example.ClothingStoreManagementAPI.model.Entity.ListOfDeliveryStores;
import java.util.*;
@Service
public class ListOfDeliveryStoresService {
	@Autowired
	private ListOfDeliveryStoresRepository ListOfDeliveryStoresRepository;
	@Autowired
	private Common common;
	@Transactional(readOnly = true)
	public String SelectMaxId() {
		try{
			return ListOfDeliveryStoresRepository.SelectMaxId();
		}
		catch(Exception e) {
			System.out.print("SelectMaxId, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional(readOnly = true)
	public List<ListOfDeliveryStores> SellectListOfDeliveryStores(String idSalesSlip){
		try {
			return ListOfDeliveryStoresRepository.SellectListOfDeliveryStores(idSalesSlip);
		}
		catch(Exception e) {
			System.out.print("SellectListOfDeliveryStores, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional(readOnly = true)
	public String InsertListOfDeliveryStores(ListOfDeliveryStores ListOfDeliveryStores) {
		try {
			String idcurrent = ListOfDeliveryStoresRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(ListOfDeliveryStores.class);
			ListOfDeliveryStores.setIdList(newId);
			ListOfDeliveryStoresRepository.save(ListOfDeliveryStores); // thêm brand vào csdl
			ListOfDeliveryStoresRepository.flush();
			if(ListOfDeliveryStoresRepository.existsById(newId)) return newId;
			else return "";// trạng thái tồn tại của object mới
		}
		catch(Exception e) {
			System.out.print("InsertListOfDeliveryStores, Error : " + e.getMessage());
			return "";
		}
	}
	@Transactional
	public boolean UpdateListOfDeliveryStores(ListOfDeliveryStores ListOfDeliveryStores) {
		try {
			return ListOfDeliveryStoresRepository.UpdateListOfDeliveryStores(ListOfDeliveryStores.getIdList(), ListOfDeliveryStores.getIdSalesSlip(), 
					ListOfDeliveryStores.getIdShop(), ListOfDeliveryStores.isStatus()) >0;
		}
		catch(Exception e) {
			System.out.print("UpdateListOfDeliveryStores, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteListOfDeliveryStores(String idList) {
		try {
			ListOfDeliveryStoresRepository.deleteById(idList);
			return !ListOfDeliveryStoresRepository.existsById(idList);
		}
		catch(Exception e) {
			System.out.print("DeleteListOfDeliveryStores, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteListOfDeliveryStoresByidSalesSlip (String idSalesSlip) {
		try {
			return ListOfDeliveryStoresRepository.DeleteListOfDeliveryStoresByidSalesSlip(idSalesSlip) > 0;
		}
		catch(Exception e) {
			System.out.print("DeleteListOfDeliveryStores, Error : " + e.getMessage());
			return false;
		}
	}
}
