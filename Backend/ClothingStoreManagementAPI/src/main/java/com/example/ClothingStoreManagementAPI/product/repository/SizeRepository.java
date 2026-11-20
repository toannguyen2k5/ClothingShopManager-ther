package com.example.ClothingStoreManagementAPI.product.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.ClothingStoreManagementAPI.product.model.Entity.Size;
import org.springframework.stereotype.Repository;
@Repository
public interface SizeRepository extends JpaRepository<Size,String>{
	@Query("SELECT MAX(idSize) FROM Size")
	String SelectMaxId();
	
	@Query("SELECT s.idSize FROM Size s WHERE s.nameSize = :nameSize")
	String SelectIdSize(@Param("nameSize") String nameSize);
	
	// chỉnh sửa màu sắc
	 @Modifying
	 @Query("UPDATE Size b SET b.nameSize = :nameSize, b.description = :description WHERE b.idSize = :idSize")
	    int UpdateSize(@Param("idSize") String idSize,
	                    @Param("nameSize") String nameSize,
	                    @Param("description") String description);
}
