package com.example.shopmanager.controller;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.shopmanager.util.CommonUtil;

@RestController
@RequestMapping("/api/Image")
public class ImageController {
	@Autowired
	private CommonUtil common;
	@Autowired
	private com.example.shopmanager.service.ImageService ImageService;

	@PostMapping("/upload/{ScopeName}/{id}")
	public ResponseEntity<?> uploadImages(@PathVariable String ScopeName, @PathVariable String id,
			@RequestParam HashMap<String, String> deleimages, @RequestParam List<MultipartFile> addimages) {
		return common.ReturnReponse(ImageService.uploadImages(deleimages, addimages, ScopeName, id), "Upload", "image");
	}

	@PostMapping("/upload1/{ScopeName}/{id}")
	public ResponseEntity<?> uploadImages(@PathVariable String ScopeName, @PathVariable String id,
			@RequestParam List<MultipartFile> addimages) {
		return common.ReturnReponse(ImageService.uploadImages(addimages, ScopeName, id), "Upload", "image");
	}

	@GetMapping("/Get/{ScopeName}/{id}")
	public ResponseEntity<?> GetImage(@PathVariable String ScopeName, @PathVariable String id) {
		return common.ReturnReponse(ImageService.selectImagesById(id, "upload/" + ScopeName + "/"), "sellect",
				"image" + ScopeName);
	}

	@GetMapping("/{ScopeName}/{id}/{filename:.+}")
	public ResponseEntity<Resource> getImage(@PathVariable String ScopeName, @PathVariable String id,
			@PathVariable String filename) throws IOException {
		try {
			Path filePath = Paths.get("upload", ScopeName, id).normalize();
			Resource resource = new UrlResource(filePath.toUri());
			if (!resource.exists()) {
				return ResponseEntity.notFound().build();
			}

			String contentType = Files.probeContentType(filePath);
			return ResponseEntity.ok()
					.contentType(
							MediaType.parseMediaType(contentType != null ? contentType : "application/octet-stream"))
					.body(resource);

		} catch (MalformedURLException e) {
			return ResponseEntity.badRequest().build();
		}
	}
}
