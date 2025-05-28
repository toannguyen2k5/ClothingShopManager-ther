package com.example.ClothingStoreManagementAPI.model.DataRequest;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;
import com.example.ClothingStoreManagementAPI.model.Entity.Price;
import com.example.ClothingStoreManagementAPI.model.Entity.DetailProduct;
import com.example.ClothingStoreManagementAPI.model.Entity.InventoryShop;

import lombok.*;
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InsertProductData {
	private String nameProduct;
    private String idStyle;
    private String idMaterial;
    private String idBrand;
    private String idCategory;
    private String idSupplier;
    private String description;
    private List<DetailProduct> detailProducts;
    private List<InventoryShop> InventoryShops;
    private List<Price> prices;
	private MultipartFile mainImage;
	private List<MultipartFile> subImages;
}
