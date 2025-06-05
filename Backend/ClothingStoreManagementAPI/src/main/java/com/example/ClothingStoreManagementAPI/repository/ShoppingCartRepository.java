package com.example.ClothingStoreManagementAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.ClothingStoreManagementAPI.model.Entity.ShoppingCart;
import com.example.ClothingStoreManagementAPI.model.DTO.*;
import java.time.LocalDate;

@Repository
public interface ShoppingCartRepository  extends JpaRepository<ShoppingCart, String>{
	// tìm kiếm idShoppingCart lớn nhất trong bảng dữ liệu
	@Query("SELECT MAX(idShoppingCart) FROM ShoppingCart")
	String SelectMaxId();
	// tìm kiếm thông tin hàng hóa trong giỏ 
	@Query("SELECT u FROM ShoppingCart u WHERE u.idUser = :idUser AND u.idDetail = :idDetail")
	ShoppingCart SelectShoppingCart(@Param("idUser") String idUser , @Param("idDetail") String idDetail);
	// tìm kiếm danh sách sản phẩm trong giỏ hàng của người dùng bằng idUser
	@Query("SELECT new com.example.ClothingStoreManagementAPI.model.DTO.ShoppingCartItemDTO(" +
		       "sc.idShoppingCart, sc.idUser, sc.idDetail , p.idProduct, sc.quantity, sc.status, " +
		       "pi.path, p.nameProduct, s.nameSize, c.nameColor,de.decrease,de.quantityLimit,a.price) " +
		       "FROM ShoppingCart sc " +
		       "INNER JOIN DetailProduct d ON d.idDetail = sc.idDetail " +
		       "INNER JOIN Product p ON p.idProduct = d.idProduct " +
		       "INNER JOIN ProductImage pi ON pi.idProduct = p.idProduct AND pi.isMain = true " +
		       "INNER JOIN Color c ON c.idColor = d.idColor " +
		       "INNER JOIN Size s ON s.idSize = d.idSize " +
		       "INNER JOIN Price a ON a.idProduct = p.idProduct AND a.status = true "+
		       "LEFT JOIN DiscountEvent de On de.idProduct = p.idProduct AND de.eventDeadline > :now "+
		       "WHERE sc.idUser = :idUser")
	List<ShoppingCartItemDTO> SelectShoppingCartByidUser(@Param("idUser") String idUser,@Param("now") LocalDate  now);
	// chỉnh sửa số lượng giỏ hàng
	@Modifying
	@Query("UPDATE ShoppingCart s SET s.status = :status WHERE s.idShoppingCart = :idShoppingCart")
	int UpdateStatus(@Param("status") boolean status , @Param("idShoppingCart") String idShoppingCart);
	@Modifying
	@Query("UPDATE ShoppingCart s SET s.quantity = :quantity WHERE s.idShoppingCart = :idShoppingCart")
	int UpdateQuantity(@Param("quantity") int quantity , @Param("idShoppingCart") String idShoppingCart);
}
