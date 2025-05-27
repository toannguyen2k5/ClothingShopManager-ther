package com.example.ClothingStoreManagementAPI.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.ClothingStoreManagementAPI.service.*;
import com.example.ClothingStoreManagementAPI.common.CommonUtil;
import com.example.ClothingStoreManagementAPI.model.DTO.*;
import com.example.ClothingStoreManagementAPI.model.Entity.Product;
import com.example.ClothingStoreManagementAPI.model.DataRequest.*;

import java.util.HashMap;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000") // Cho phép React truy cập
@RestController
@RequestMapping("/api/product/")
public class ProductController {
	@Autowired
	private ProductService ProductService ;
	@Autowired
	private Common common;
	// khi người dùng vào trang web để xem sản phẩm
	@GetMapping("sellectAll/{param_offset}/{param_limit}/")
	public ResponseEntity<?> SellectAll(@PathVariable String param_limit, @PathVariable String param_offset) {
    	int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
		List<ProductDTO> ProductDTOs = ProductService.SellectAll(limit, offset);
		return ResponseEntity.ok(common.ReturnReponse(ProductDTOs, "Sellect all", "product"));
    }
	// khi người dùng tìm kiếm thông tin hàng hóa
	@GetMapping("sellectByProperty/{param_offset}/{param_limit}/")
	public ResponseEntity<?> SellectByProperty(@RequestParam String select,@PathVariable String param_limit, @PathVariable String param_offset){
		int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
		List<ProductDTO> ProductDTOs = ProductService.SellectInfor(select,limit,offset);
		return ResponseEntity.ok(common.ReturnReponse(ProductDTOs, "Sellect", "product"));
	}

	// khi người dùng tìm kiếm thông tin hàng hóa
	@GetMapping("sellect/c_{idCategory}/{param_offset}/{param_limit}/")
	public ResponseEntity<?> SellectByIdCategory(@PathVariable String idCategory,@PathVariable String param_limit, @PathVariable String param_offset){
		int limit, offset;
    	limit = CommonUtil.tryParseInt(param_limit);
    	offset = CommonUtil.tryParseInt(param_offset);
		List<ProductDTO> ProductDTOs = ProductService.SellectByCategory(idCategory,limit,offset);
		return ResponseEntity.ok(common.ReturnReponse(ProductDTOs, "Sellect", "product"));
	}
	// thêm hoặc chỉnh sửa sản phẩm
	@PostMapping("inserProduct")
	public ResponseEntity<?> InserOrUpdateProduct(@ModelAttribute InsertProductData InsertProductData){
		Product newProduct = new Product();
		newProduct.setDescription(InsertProductData.getDescription());
		newProduct.setNameProduct(InsertProductData.getNameProduct());
		newProduct.setIdStyle(InsertProductData.getIdStyle());
		newProduct.setIdMaterial(InsertProductData.getIdMaterial());
		newProduct.setIdBrand(InsertProductData.getIdBrand());
		newProduct.setIdCategory(InsertProductData.getIdCategory());
		newProduct.setIdSupplier(InsertProductData.getIdSupplier());
		newProduct.setDescription(InsertProductData.getDescription());
		newProduct.setStatus(true);
		return ResponseEntity.ok(common.ReturnReponse(ProductService.InserProduct( newProduct,InsertProductData.getMainImage(),InsertProductData.getSubImages()), "Insert", "product"));
	}
	@PostMapping("insertProductFormSlip")
	public ResponseEntity<?> InserOrUpdateProduct(@RequestBody Product Product){
		return ResponseEntity.ok(common.ReturnReponse(ProductService.InserProduct(Product), "Insert", "product"));
	}
	@PostMapping("updateProduct")
	public ResponseEntity<?> UpdateProduct(@RequestBody Product product,@RequestParam HashMap<String,String> deleimages,@RequestParam List<MultipartFile> addimages){
		if(addimages.size()==1)return ResponseEntity.ok(common.ReturnReponse(ProductService.UpdateProduct(product,deleimages,addimages,true), "Update", "product"));
		else return ResponseEntity.ok(common.ReturnReponse(ProductService.UpdateProduct(product,deleimages,addimages,false), "Update", "product"));
	} 
}
