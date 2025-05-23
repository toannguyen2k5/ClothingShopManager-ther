package com.example.ClothingStoreManagementAPI.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ClothingStoreManagementAPI.model.ConstData.Province;
import com.example.ClothingStoreManagementAPI.repository.ProvinceRepository;

import java.util.List;
@Service
public class ProvinceService {
	@Autowired
	private ProvinceRepository ProvinceRepository;
	// lấy thông tin tất cả các tỉnh
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
