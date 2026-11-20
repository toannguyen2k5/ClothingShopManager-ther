package com.example.ClothingStoreManagementAPI.product.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.ClothingStoreManagementAPI.product.repository.PriceRepository;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Price;
import java.util.*;
@Service
public class PriceService {
	@Autowired
	private PriceRepository PriceRepository;
	@Autowired
	private Common common;
	@Transactional(readOnly = true)
	public String SelectMaxId() {
		try{
			return PriceRepository.SelectMaxId();
		}
		catch(Exception e) {
			System.out.print("SelectMaxId, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional(readOnly = true)
	public int FindPriceCurrent ( String idProduct) {
		try{
			return PriceRepository.SellectPriceCurrent(idProduct);
		}
		catch(Exception e) {
			System.out.print("FindPriceCurrent, Error : " + e.getMessage());
			return 0;
		}
	}
	@Transactional(readOnly = true)
	public List<Price> SelectPrice(String idProduct) {
		try {
			return PriceRepository.searchPrices(idProduct);
		}
		catch(Exception e) {
			System.out.print("SelectIdPrice, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional
	public boolean InsertPrice(Price Price){
		try {
				PriceRepository.UpdatePriceStatus(Price.getIdProduct());
				String idcurrent = PriceRepository.SelectMaxId();
				String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(Price.class);
				Price.setIdPrice(newId);
				PriceRepository.save(Price); // thêm Price vào csdl
				PriceRepository.flush();
				return PriceRepository.existsById(newId); // trạng thái tồn tại của object mới
			}
		catch(Exception e) {
			System.out.print("InsertPrice, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean UpdatePrice(String idPrice , int price) {
		try {
			return PriceRepository.UpdateNewPrice(idPrice,price)>0;
		}
		catch(Exception e) {
			System.out.print("UpdatePrice, Error : " + e.getMessage());
			return false;
		}
	}
}
