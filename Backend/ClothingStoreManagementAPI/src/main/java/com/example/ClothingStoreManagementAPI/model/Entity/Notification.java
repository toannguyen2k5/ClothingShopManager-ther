package com.example.ClothingStoreManagementAPI.model.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "notification")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Notification {
    @Id
    @Column(name = "idNotification", length = 45)
    private String idNotification;

    @Column(name = "idUser", length = 45)
    private String idUser;

    @Column(name = "content", length = 255)
    private String content;

    @Column(name = "viewingStatus",nullable = false)
    private boolean viewingStatus;
}
