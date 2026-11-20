package com.example.ClothingStoreManagementAPI.product.model.Entity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "discountevent")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DiscountEvent {

    @Id
    @Column(name = "idEvent", length = 45)
    private String idEvent;
    
    @Column(name = "eventCode", length = 45, nullable = false)
    private String eventCode;
    
    @Column(name = "idProduct", length = 45, nullable = false)
    private String idProduct;

    @Column(name = "decrease", nullable = false)
    private Float decrease;

    @Column(name = "quantityLimit",columnDefinition = "INT UNSIGNED" , nullable = true)
    private Integer quantityLimit;

    @Column(name = "eventDeadline")
    private LocalDate eventDeadline;

    @Column(name = "description", length = 255)
    private String description;
}
