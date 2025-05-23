package com.example.ClothingStoreManagementAPI.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.model.Entity.Supplier;


import org.springframework.stereotype.Repository;
@Repository
public interface SupplierRepository extends JpaRepository<Supplier,String>{
	@Query("SELECT MAX(idSupplier) FROM Supplier")
	String SelectMaxId();
	
	// tìm kiếm nhà cung cấp dựa trên tên nhà cung cấp
	@Query("SELECT a.idSupplier FROM Supplier a WHERE a.nameSupplier = :nameSupplier")
	String SelectIdSupplier(@Param("nameSupplier") String nameSupplier);

	// chỉnh sửa nhà cung cấp
	@Modifying
	@Query("UPDATE Supplier s SET s.nameSupplier =:nameSupplier,s.contactName=:contactName,s.phoneNumber = :phoneNumber,s.email=:email, s.address = :address,s.status=:status WHERE s.idSupplier = :idSupplier")
	int UpdateSupplier(@Param("idSupplier") String idSupplier ,@Param("nameSupplier") String nameSupplier ,@Param("contactName") String contactName,@Param("phoneNumber") String phoneNumber ,@Param("email") String email ,@Param("address") String address,@Param("status") boolean status);
}
