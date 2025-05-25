package com.example.shopmanager.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "categories")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Category {
	@Id
	@Column(name = "id_category")
	private String idCategory;

	@Column(name = "name", nullable = false, columnDefinition = "TEXT")
	private String name;

    @Column(name = "description", columnDefinition = "TEXT")
	private String description;

    @Column(name = "parent_category", insertable = false, updatable = false)
	private String idParentCategory;
    
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "parent_category")
	private Category parentCategory;

	@OneToMany(mappedBy = "parentCategory", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Category> children = new ArrayList<>();
}
