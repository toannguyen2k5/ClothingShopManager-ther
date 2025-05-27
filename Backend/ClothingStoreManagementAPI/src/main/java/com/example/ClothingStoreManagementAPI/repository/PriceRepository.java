package com.example.ClothingStoreManagementAPI.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.model.Entity.Price;

import jakarta.transaction.Transactional;

import org.springframework.stereotype.Repository;
@Repository
public interface PriceRepository extends JpaRepository<Price,String>{
	@Query("SELECT MAX(idPrice) FROM Price")
	String SelectMaxId();
	// tìm kiếm danh sách hàng bằng mã hàng hóa
	@Query("SELECT p.price FROM Price p\r\n"
			+ "INNER JOIN Product pr ON pr.idProduct = p.idProduct\r\n"
			+ "WHERE pr.idProduct = :idProduct  AND p.status = true")
	int SellectPriceCurrent(@Param("idProduct") String idProduct);
	// tìm kiếm màu sắc dựa trên tên màu sắc
	@Query("SELECT b.idPrice FROM Price b WHERE b.idProduct = :idProduct")
	List<Price> searchPrices(@Param("query") String query);
	@Modifying
	@Transactional
	@Query("UPDATE Price b SET b.status = false WHERE b.idProduct = :idProduct")
    int UpdatePriceStatus(@Param("idProduct") String idProduct);
	@Modifying
	@Transactional
	@Query("UPDATE Price b SET  b.price = :price WHERE b.idPrice = :idPrice")
    int UpdateNewPrice(@Param("idPrice") String idPrice,@Param("price") int price);
}
