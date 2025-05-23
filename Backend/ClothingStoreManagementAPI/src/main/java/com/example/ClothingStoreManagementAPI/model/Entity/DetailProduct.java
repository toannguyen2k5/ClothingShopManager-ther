package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
@Entity
@Table(name = "detailproduct")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DetailProduct {

    @Id
    @Column(name = "idDetail", length = 45)
    private String idDetail;

    @Column(name = "numberSeri", length = 45, nullable = false)
    private String numberSeri;

    @Column(name = "idSize", length = 45, nullable = false)
    private String idSize;

    @Column(name = "dayImport")
    private LocalDate dayImport;

    @Column(name = "status", nullable = false)
    private boolean status; 

    @Column(name = "idProduct", length = 45, nullable = false)
    private String idProduct;

    @Column(name = "sellStatus", nullable = false)
    private boolean sellStatus;

    @Column(name = "idColor", length = 45, nullable = false)
    private String idColor;
}
