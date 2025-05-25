package com.example.shopmanager.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "images")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Image {
	@Id
	@Column(name = "id_image")
	private String idImage;

	@Column(name = "id_refer", nullable = false)
	private String idRefer; // có thể dùng để liên kết nhiều bảng

	@Column(name = "src_image", length = 1000, nullable = false)
	private String srcImage;

	@Column(name = "type_image", length = 45)
	private String typeImage;

	@Column(name = "order_image", length = 45)
	private String orderImage;

	@Column(name = "status")
	private Boolean status;
}
