package com.example.shopmanager.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "styles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Style {
	@Id
	@Column(name = "id_style")
	private String idStyle;

	@Column(name = "name_style", nullable = false, columnDefinition = "TEXT")
	private String nameStyle;

	@Column(name = "description", columnDefinition = "TEXT")
	private String description;

	@OneToMany(mappedBy = "style", cascade = CascadeType.ALL, orphanRemoval = true)
    
	private List<ProductVariant> variants = new ArrayList<>();
}
