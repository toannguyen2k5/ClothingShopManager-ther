package com.example.ClothingStoreManagementAPI.service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.stereotype.Service;

import com.example.ClothingStoreManagementAPI.model.ConstData.District;
import com.example.ClothingStoreManagementAPI.repository.DistrictRepository;
@Service
public class DistrictService {
	@Autowired
	private DistrictRepository DistrictRepository;
	// tìm kiếm bằng idprovince
	public List<District> SelectByIdProvince(String idProvince){
		try {
			return DistrictRepository.FindDistrict(idProvince);
		}
		catch(Exception e) {
			System.out.print("SelectByIdProvince, Error : " + e.getMessage());
			return null;
		}
	}
}
