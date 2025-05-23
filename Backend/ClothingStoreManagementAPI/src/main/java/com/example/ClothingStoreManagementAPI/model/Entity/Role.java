package com.example.ClothingStoreManagementAPI.model.Entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "role")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Role {

    @Id
    @Column(name = "idRole", length = 45)
    private String idRole;

    @Column(name = "nameRole", length = 45, nullable = false)
    private String nameRole;
}

