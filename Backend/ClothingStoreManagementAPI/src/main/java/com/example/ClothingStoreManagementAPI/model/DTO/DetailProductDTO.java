package com.example.ClothingStoreManagementAPI.model.DTO;
import com.example.ClothingStoreManagementAPI.model.Entity.ProductImage;
import com.example.ClothingStoreManagementAPI.model.Entity.DiscountEvent;
import lombok.*;
import java.util.*;
@Getter
@Setter
@NoArgsConstructor
public class DetailProductDTO {
	public DetailProductDTO(String idProduct,String nameProduct,String nameCategory,String nameMaterial,String nameBrand,String nameStyle,int price,String description) {
		this.idProduct = idProduct;
		this.nameProduct = nameProduct;
		this.nameCategory = nameCategory;
		this.nameMaterial = nameMaterial;
		this.nameBrand = nameBrand;
		this.nameStyle = nameStyle;
		this.price = price;
		this.description = description;
	}
	private String idProduct;
	private String nameProduct;
	private String nameCategory;
	private String nameMaterial;
	private String nameBrand;
	private String nameStyle;
	private int price;
	private String description;
	private DiscountEvent DiscountEvent;
	private List<ProductImage> Images = new ArrayList<>();
	private List<ColorSizeDTO> ColorSize = new ArrayList<>();
}
