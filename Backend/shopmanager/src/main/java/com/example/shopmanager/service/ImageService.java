package com.example.shopmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.shopmanager.entity.Image;
import com.example.shopmanager.repository.ImageRepository;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ImageService {

	@Autowired
	private ImageRepository repository;

	public List<Image> findAll() {
		return repository.findAll();
	}

	public Optional<Image> findById(String id) {
		return repository.findById(id);
	}

	public Image save(Image image) {
		return repository.save(image);
	}

	public void deleteById(String id) {
		repository.deleteById(id);
	}

	private String TypeImage(String mimeType) {
		switch (mimeType) {
		case "image/jpeg":
			return ".jpg";
		case "image/png":
			return ".png";
		case "image/gif":
			return ".gif";
		case "image/webp":
			return ".webp";
		case "image/bmp":
			return ".bmp";
		case "image/svg+xml":
			return ".svg";
		default:
			return ""; // hoặc throw exception nếu không hỗ trợ
		}
	}

	public List<String> InserImage(String basePath, List<MultipartFile> addimages, String id, String ScopeName) {
		List<String> uploadedFileNames = new ArrayList<>();
		try {
			for (MultipartFile file : addimages) {
				if (!file.isEmpty()) {
					String filename = file.getOriginalFilename();

					// Tạo đường dẫn mới đúng theo yêu cầu
					Path directoryPath = Paths.get("upload", ScopeName, id).normalize();
					Path filePath = directoryPath.resolve(filename).normalize();

					Files.createDirectories(directoryPath); // Ensure directory exists
					Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

					uploadedFileNames.add(filePath.toString().replace("\\", "/")); // Đổi dấu `\` thành `/` để tránh lỗi
																					// URL
				}
			}
			return uploadedFileNames;
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}
	}

	// cai key-value cua deleimage ung voi idimage va path còn những cái khác thì
	// key là 1 giá trị tăng dần
	public List<String> uploadImages(HashMap<String, String> deleimages, List<MultipartFile> addimages,
			String ScopeName, String id) {
		DeleteImage(deleimages, id);
		return InserImage("upload", addimages, id, ScopeName.toLowerCase());
	}

	public List<String> uploadImages(List<MultipartFile> addimages, String ScopeName, String id) {
		return InserImage("upload", addimages, id, ScopeName.toLowerCase());
	}

	public boolean DeleteImage(HashMap<String, String> deleimages, String id) {
		try {
			HashSet<Boolean> result = new HashSet<>();
			for (Map.Entry<String, String> entry : deleimages.entrySet()) {
				Path paths = Paths.get(entry.getValue());
				if (Files.exists(paths))
					Files.delete(paths);
				result.add(!Files.exists(paths));
				repository.deactivateImageById(id, paths.toString());
			}
			return !result.contains(false);
		} catch (IOException e) {
			System.out.print("error :" + e.getMessage());
			return false;
		}
	}

	public List<Image> getAllActiveImages(String id) {
		return repository.findAllActiveIdRefers(id);
	}

	public List<String> selectImagesById(String id, String path) {
		List<String> matchedImages = new ArrayList<>();

		try {
			File folder = new File(path);

			// Kiểm tra thư mục có tồn tại và có phải là thư mục không
			if (!folder.exists() || !folder.isDirectory()) {
				System.out.println("Error: Thư mục không tồn tại hoặc không phải thư mục.");
				return matchedImages; // trả về danh sách rỗng
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