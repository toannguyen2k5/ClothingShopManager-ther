package com.example.ClothingStoreManagementAPI.model.DTO;
import com.example.ClothingStoreManagementAPI.model.Entity.ProductImage;
import com.example.ClothingStoreManagementAPI.model.Entity.DiscountEvent;
import lombok.*;
import java.util.*;
@Getter
@Setter
@NoArgsConstructor
public class DetailProductDTO {
	public DetailProductDTO(String idProduct,String nameProduct,String nameCategory,String nameMaterial,String nameBrand,String nameStyle,Integer price,String description,Boolean status) {
		this.idProduct = idProduct;
		this.nameProduct = nameProduct;
		this.nameCategory = nameCategory;
		this.nameMaterial = nameMaterial;
		this.nameBrand = nameBrand;
		this.nameStyle = nameStyle;
		this.price = price;
		this.description = description;
		this.status = status;
	}
	private String idProduct;
	private String nameProduct;
	private String nameCategory;
	private String nameMaterial;
	private String nameBrand;
	private String nameStyle;
	private Integer price;
	private String description;
	private Boolean status;
	private DiscountEvent DiscountEvent;
	private List<ProductImage> Images = new ArrayList<>();
	private List<ColorSizeDTO> ColorSize = new ArrayList<>();
}
