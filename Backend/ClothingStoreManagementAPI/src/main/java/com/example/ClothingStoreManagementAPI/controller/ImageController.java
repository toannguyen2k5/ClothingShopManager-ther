package com.example.ClothingStoreManagementAPI.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import java.nio.file.Path;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.net.MalformedURLException;
import java.io.IOException;
import org.springframework.http.MediaType;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import org.springframework.web.multipart.MultipartFile;
import com.example.ClothingStoreManagementAPI.service.*;
import org.springframework.web.bind.annotation.PathVariable;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Image")
public class ImageController {
	@Autowired
	private Common common;
	@Autowired
	private ImageService ImageService;
	@Autowired
	private UserService userService;
	@PostMapping("/upload/{ScopeName}/{id}")
	 public ResponseEntity<?> uploadImages(@PathVariable String ScopeName,@PathVariable String id,@RequestParam HashMap<String,String> deleimages,@RequestParam List<MultipartFile> addimages,@RequestParam boolean IsMain) {
        return ResponseEntity.ok(common.ReturnReponse(ImageService.uploadImages(deleimages,addimages,ScopeName,id,IsMain), "Upload", "image"));
    }
	@PostMapping("/upload1/{ScopeName}/{id}")
	 public ResponseEntity<?> uploadImages(@PathVariable String ScopeName,@PathVariable String id,@RequestParam List<MultipartFile> addimages,@RequestParam boolean IsMain) {
       return ResponseEntity.ok(common.ReturnReponse(ImageService.uploadImages(addimages,ScopeName,id,IsMain), "Upload", "image"));
	}
	@PostMapping("/upload/avatar/{id}")
	 public ResponseEntity<?> uploadAvatar(@PathVariable String idUser,@RequestParam List<MultipartFile> addimages) {
      return ResponseEntity.ok(common.ReturnReponse(userService.uploadAvatar(addimages,idUser), "Upload", "image"));
	}
	@GetMapping("/Get/{ScopeName}/{id}")
	public ResponseEntity<?> GetImage(@PathVariable String ScopeName,@PathVariable String id){
		return ResponseEntity.ok(common.ReturnReponse(ImageService.selectImagesById(id, "upload/"+ScopeName+"/"),"sellect","image" + ScopeName));
	}
	@GetMapping("{ScopeName}/{filename:.+}")
	public ResponseEntity<Resource> getImage(@PathVariable String ScopeName,@PathVariable String filename) throws IOException {
	    try {
	        Path filePath = Paths.get("upload/"+ScopeName).resolve(filename).normalize();
	        Resource resource = new UrlResource(filePath.toUri());
	        if (!resource.exists()) {
	            return ResponseEntity.notFound().build();
	        }

	        String contentType = Files.probeContentType(filePath);
	        return ResponseEntity.ok()
	                .contentType(MediaType.parseMediaType(contentType != null ? contentType : "application/octet-stream"))
	                .body(resource);

	    } catch (MalformedURLException e) {
	        return ResponseEntity.badRequest().build();
	    }
	}
	@GetMapping("upload/{ScopeName}/{filename:.+}")
	public ResponseEntity<Resource> getFile(@PathVariable String ScopeName,@PathVariable String filename) throws IOException {
	    try {
	    	Path filePath = Paths.get("upload/"+ScopeName).resolve(filename).normalize();
	        Resource resource = new UrlResource(filePath.toUri());
	        if (!resource.exists()) {
	            return ResponseEntity.notFound().build();
	        }

	        String contentType = Files.probeContentType(filePath);
	        return ResponseEntity.ok()
	                .contentType(MediaType.parseMediaType(contentType != null ? contentType : "application/octet-stream"))
	                .body(resource);

	    } catch (MalformedURLException e) {
	        return ResponseEntity.badRequest().build();
	    }
	}
}
