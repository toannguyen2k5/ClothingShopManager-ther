package com.example.ClothingStoreManagementAPI.product.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.ClothingStoreManagementAPI.product.model.ConstData.Province;
import com.example.ClothingStoreManagementAPI.product.repository.ProvinceRepository;

import java.util.List;
@Service
public class ProvinceService {
	@Autowired
	private ProvinceRepository ProvinceRepository;
	// lấy thông tin tất cả các tỉnh
	@Transactional(readOnly = true)
	public List<Province> SellectAll (){
		try {
			return ProvinceRepository.findAll();
		}
		catch(Exception e) {
			System.out.print("SellectAll province, Error : " + e.getMessage());
			return null;
		}
	}
}
