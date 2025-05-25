package com.example.shopmanager.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "colors")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Color {
	@Id
	@Column(name = "id_color")
	private String idColor;

	@Column(name = "name_color", nullable = false, columnDefinition = "TEXT")
	private String nameColor;

	@Column(name = "hex_code", nullable = false)
	private String hexCode;

	@OneToMany(mappedBy = "color", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ProductVariant> variants = new ArrayList<>();
}
