package com.example.ClothingStoreManagementAPI.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import com.example.ClothingStoreManagementAPI.model.Entity.ProductImage;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.*;
import java.io.File;
@Service
public class ImageService {
	@Autowired
	private ProductImageService ProductImageService;
	private String TypeImage(String mimeType) {
		switch (mimeType) {
	        case "image/jpeg":return ".jpg";
	        case "image/png":return ".png";
	        case "image/gif":return ".gif";
	        case "image/webp":return ".webp";
	        case "image/bmp":return ".bmp";
	        case "image/svg+xml":return ".svg";
	        default:return ""; // hoặc throw exception nếu không hỗ trợ
		}
	}
	// cai key-value cua deleimage ung voi idimage va path còn những cái khác thì key là 1 giá trị tăng dần
	public List<String> uploadImages(HashMap<String,String> deleimages,List<MultipartFile> addimages , String ScopeName, String id) {
		DeleteImage(deleimages,ScopeName.toLowerCase());
    	return InserImage("upload/"+ScopeName.toLowerCase()+"/",addimages,id,ScopeName.toLowerCase());
    }
	public List<String> uploadImages(List<MultipartFile> addimages , String ScopeName, String id) {
    	return InserImage("upload/"+ScopeName.toLowerCase()+"/",addimages,id,ScopeName.toLowerCase());
    }
	public List<String> InserImage(String path , List<MultipartFile> addimages, String id,String ScopeName) {
		List<String> uploadedFileNames = new ArrayList<>();
		try {
				for (MultipartFile file : addimages) {
		            if (!file.isEmpty()) {
		                String filename = id +"_"+ file.getOriginalFilename();
		                Path paths = Paths.get(path + filename);
		                Files.createDirectories(paths.getParent()); // Ensure directory exists
		                Files.copy(file.getInputStream(), paths, StandardCopyOption.REPLACE_EXISTING);
		                uploadedFileNames.add(path+filename);
		                if(ScopeName.equals("product"))ProductImageService.InsertProductImage(new ProductImage(null,id,path+filename,false));
		            }
		        }
				return uploadedFileNames;
        	} 
		catch (IOException e) {
        	return null;
        }
	}
	public boolean DeleteImage(HashMap<String,String> deleimages,String ScopeName) {
		try {
			HashSet<Boolean> result = new HashSet<>();
			for(Map.Entry<String, String> entry : deleimages.entrySet()) {
				 Path paths = Paths.get(entry.getValue());
				 if (Files.exists(paths)) Files.delete(paths);
				 result.add(!Files.exists(paths));
				 if(ScopeName.equals("product"))ProductImageService.DeleteProductImage(entry.getKey());
			}
			return !result.contains(false);
		}
		catch(IOException e) {
			System.out.print("error :" +e.getMessage());
			return false;
		}
	}
	public List<String> selectImagesById(String id, String path) {
	    List<String> matchedImages = new ArrayList<>();
	    
	    try {
	        File folder = new File(path);
	        
	        // Kiểm tra thư mục có tồn tại và có phải là thư mục không
	        if (!folder.exists() || !folder.isDirectory()) {
	            System.out.println("Error: Thư mục không tồn tại hoặc không phải thư mục.");
	            return matchedImages;  // trả về danh sách rỗng
	        }
	        
	        // Duyệt qua các file trong thư mục
	        for (File file : folder.listFiles()) {
	            // Kiểm tra xem file có phải là file và tên chứa id
	            if (file.isFile() && file.getName().toLowerCase().contains(id.toLowerCase())) {
	                matchedImages.add(file.getName());
	            }
	        }
	    } catch (Exception e) {
	        // Log lỗi
	        System.out.println("Lỗi trong quá trình tìm kiếm: " + e.getMessage());
	    }
	    
	    return matchedImages;
	}
}
