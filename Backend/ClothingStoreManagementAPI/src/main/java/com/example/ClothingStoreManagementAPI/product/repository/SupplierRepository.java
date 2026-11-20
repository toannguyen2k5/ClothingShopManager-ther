package com.example.ClothingStoreManagementAPI.product.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.product.model.Entity.Supplier;


import org.springframework.stereotype.Repository;
@Repository
public interface SupplierRepository extends JpaRepository<Supplier,String>{
	@Query("SELECT MAX(idSupplier) FROM Supplier")
	String SelectMaxId();
	
	// tìm kiếm tên nhà cung cấp dựa trên id
	@Query("SELECT u.nameSupplier FROM Supplier u WHERE u.idSupplier = :idSupplier")
	String SellectFullName (@Param("idSupplier") String idSupplier);
	
	// tìm kiếm nhà cung cấp dựa trên tên nhà cung cấp
	@Query("SELECT a.idSupplier FROM Supplier a WHERE a.nameSupplier = :nameSupplier")
	String SelectIdSupplier(@Param("nameSupplier") String nameSupplier);

	// chỉnh sửa nhà cung cấp
	@Modifying
	@Query("UPDATE Supplier s SET s.nameSupplier =:nameSupplier,s.contactName=:contactName,s.phoneNumber = :phoneNumber,s.email=:email, s.address = :address,s.status=:status WHERE s.idSupplier = :idSupplier")
	int UpdateSupplier(@Param("idSupplier") String idSupplier ,@Param("nameSupplier") String nameSupplier ,@Param("contactName") String contactName,@Param("phoneNumber") String phoneNumber ,@Param("email") String email ,@Param("address") String address,@Param("status") boolean status);
}
