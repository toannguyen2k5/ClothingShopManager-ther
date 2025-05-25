package com.example.shopmanager.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, String> {
	@Query("SELECT MAX(idImage) FROM Image")
	String getMaxId();
	@Modifying
	@Transactional
	@Query("UPDATE Image i SET i.status = false WHERE i.idRefer = :id AND i.srcImage = :path ")
	int deactivateImageById(String id, String path);

	// Lấy tất cả id_refer có ảnh status = true
	@Query("SELECT DISTINCT i FROM Image i WHERE i.idRefer = :id AND i.status = true")
	List<Image> findAllActiveIdRefers(String id);
}
