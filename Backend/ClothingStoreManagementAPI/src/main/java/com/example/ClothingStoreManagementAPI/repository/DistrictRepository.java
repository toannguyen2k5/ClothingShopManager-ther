package com.example.ClothingStoreManagementAPI.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import com.example.ClothingStoreManagementAPI.model.ConstData.District;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
public interface DistrictRepository extends JpaRepository<District, String>{
	@Query("SELECT d FROM District d \r\n"
			+ "INNER JOIN Province p ON p.idProvince = d.idProvince\r\n"
			+ "WHERE d.nameDistrict = :nameDistrict AND p.nameProvince = :nameProvince ")
	District findDistrictByNameAndProvince (@Param("nameDistrict") String nameDistrict ,@Param("nameProvince") String nameProvince );
	@Query("SELECT d FROM District d WHERE d.idProvince = :idProvince")
	List<District> FindDistrict (@Param("idProvince") String idProvince);
}
