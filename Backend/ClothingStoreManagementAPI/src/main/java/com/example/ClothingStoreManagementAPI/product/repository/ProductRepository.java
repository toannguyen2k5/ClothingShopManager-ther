package com.example.ClothingStoreManagementAPI.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

import com.example.ClothingStoreManagementAPI.product.model.Entity.*;
import com.example.ClothingStoreManagementAPI.product.model.DTO.*;

@Repository
public interface ProductRepository extends JpaRepository<Product, String>{
	@Query("SELECT MAX(idProduct) FROM Product")
	String SelectMaxId();
	@Query("SELECT p FROM Product p WHERE p.nameProduct = :nameProduct")
	List<Product> SelectByName (@Param("nameProduct") String nameProduct);
	// xem chi tiết sản phẩm dự trên thuộc tính id
	@Query("""
			SELECT new com.example.ClothingStoreManagementAPI.product.model.DTO.DetailProductDTO(
			    p.idProduct,
			    p.nameProduct,
			    pc.nameCategory,
			    pm.nameMaterial,
			    b.nameBrand,
			    s.nameStyle,
			    COALESCE(pe.price, 0),
			    p.description,
			    p.status,
			    sup.nameSupplier
			)
			FROM Product p
			LEFT JOIN ProductCategory pc ON p.idCategory = pc.idCategory
			LEFT JOIN ProductMaterial pm ON p.idMaterial = pm.idMaterial
			LEFT JOIN Brand b ON p.idBrand = b.idBrand
			LEFT JOIN Style s ON s.idStyle = p.idStyle
			LEFT JOIN Price pe ON pe.idProduct = p.idProduct AND pe.status = true
			LEFT JOIN Supplier sup ON sup.idSupplier = p.idSupplier
			WHERE p.idProduct = :idProduct
			""")
	DetailProductDTO selectDetailProduct(@Param("idProduct") String idProduct);
	// tìm kiếm đường dẫn ảnh dựa trên mã sản phẩm
	@Query("SELECT pi FROM ProductImage pi WHERE pi.idProduct = :idProduct")
	List<ProductImage> SelectPathsByIdProduct(@Param("idProduct") String idProduct);
	@Query("SELECT new com.example.ClothingStoreManagementAPI.product.model.DTO.ColorSizeDTO(c.nameColor, s.nameSize , i.quantity) "
            + "FROM DetailProduct d "
            + "INNER JOIN Color c On d.idColor = c.idColor "
            + "INNER JOIN Size s On  d.idSize = s.idSize "
            + "INNER JOIN InventoryShop i On i.idDetail = d.idDetail "
            + "WHERE d.idProduct = :idProduct")
	List<ColorSizeDTO> SelectColorSizeByIdProduct(@Param("idProduct") String idProduct);
	
	//tìm kiếm chi tiết sản phẩm dựa trên mã sản phẩm và mã shop
	@Query("SELECT new com.example.ClothingStoreManagementAPI.product.model.DTO.ColorSizeDTO(c.nameColor, s.nameSize , i.quantity) "
            + "FROM DetailProduct d "
            + "INNER JOIN Color c On d.idColor = c.idColor "
            + "INNER JOIN Size s On  d.idSize = s.idSize "
            + "INNER JOIN InventoryShop i On i.idDetail = d.idDetail AND idShop = :idShop "
            + "WHERE d.idProduct = :idProduct")
	List<ColorSizeDTO> SelectPathsByIdProductAndIdShop(@Param("idProduct") String idProduct,@Param("idShop") String idShop);
	// updtae sản phẩm
	@Modifying
	@Query("UPDATE Product p SET p.nameProduct=:nameProduct , p.idStyle=:idStyle, p.idMaterial =:idMaterial , p.idBrand =:idBrand , p.idCategory =:idCategory,p.idSupplier =:idSupplier,"
			+"p.status =:status , p.description=:description WHERE p.idProduct =:idProduct")
	int UpdateProduct (@Param("idProduct") String idProduct,@Param("nameProduct") String nameProduct,@Param("idStyle") String idType,
			@Param("idMaterial") String idMaterial,@Param("idBrand") String idBrand,@Param("idCategory") String idCategory,@Param("status") boolean status,
			@Param("description") String description,@Param("idSupplier") String idSupplier);
	@Modifying
	@Query("UPDATE Product p SET p.status =:status WHERE p.idProduct =:idProduct")
	int UpdateSaleStatus (@Param("idProduct") String idProduct,@Param("status") boolean status);
}