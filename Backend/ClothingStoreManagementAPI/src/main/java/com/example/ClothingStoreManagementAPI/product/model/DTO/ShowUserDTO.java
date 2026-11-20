package com.example.ClothingStoreManagementAPI.product.model.DTO;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ShowUserDTO {
    private String idUser;
    private String fullName;
    private String email;
    private String phoneNumber;
    private String address;
    private Boolean gender;
    private LocalDate birthDay;
    private String username;
    private Long totalOrders;
    private Long cancelledOrders;
    private Long deliveringOrders;
    private Long deliveredOrders;
    private Long totalValue;
    private String pathAvatar;
}
