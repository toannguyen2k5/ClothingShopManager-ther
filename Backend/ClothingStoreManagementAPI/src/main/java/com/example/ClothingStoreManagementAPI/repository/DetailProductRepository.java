package com.example.ClothingStoreManagementAPI.repository;

import java.time.LocalDate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.model.Entity.DetailProduct;
import com.example.ClothingStoreManagementAPI.model.DTO.ReverseRetrievalDProductDTO;

@Repository
public interface DetailProductRepository extends JpaRepository<DetailProduct, String> {

    @Query("SELECT MAX(idDetail) FROM DetailProduct")
    String SelectMaxId();

    // tìm kiếm id chi tiết sản phẩm dựa trên idProduct , idColor , idSize
    @Query("SELECT d.idDetail from  DetailProduct d WHERE d.idProduct = :idProduct AND d.idColor = :idColor AND d.idSize = :idSize ")
    String SelectIdDetailProduct(@Param("idProduct") String idProduct, @Param("idColor") String idColor, @Param("idSize") String idSize);

    // tìm kiếm trạng thái bán của sản phẩm
    @Query("SELECT d.status From DetailProduct d  WHERE d.idDetail = :idDetail")
    boolean CheckSellStatus(@Param("idDetail") String idDetail);

    // tìm kiếm tên sản phẩm , kích thước , màu sắc dựa trên tên sp
    @Query("SELECT p.nameProduct , s.nameSize , c.nameColor\r\n"
            + "FROM DetailProduct d\r\n"
            + "INNER JOIN Product p ON d.idProduct = p.idProduct\r\n"
            + "INNER JOIN Size s ON d.idSize = s.idSize\r\n"
            + "INNER JOIN Color c ON d.idColor = c.idColor\r\n"
            + "WHERE d.idDetail = :idDetail")
    ReverseRetrievalDProductDTO ReverseRetrievalDProduct(@Param("idDetail") String idDetail);

    @Modifying
    @Query("UPDATE DetailProduct d SET d.numberSeri = :numberSeri , d.idSize =:idSize , d.dayImport =:dayImport , d.status =:status , d.idProduct=:idProduct ,"
            + "d.sellStatus =:sellStatus,"
            + "d.idColor =:idColor WHERE d.idDetail = :idDetail")
    int UpdateDetailProduct(@Param("idDetail") String idDetail, @Param("numberSeri") String numberSeri, @Param("idSize") String idSize, @Param("dayImport") LocalDate dayImport,
            @Param("status") boolean status, @Param("idProduct") String idProduct, @Param("sellStatus") boolean sellStatus, @Param("idColor") String idColor);
}
