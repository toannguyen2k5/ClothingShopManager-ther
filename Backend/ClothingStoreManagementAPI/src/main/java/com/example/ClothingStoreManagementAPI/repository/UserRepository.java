package com.example.ClothingStoreManagementAPI.repository;

import java.util.List;
import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ClothingStoreManagementAPI.model.Entity.Users;
import com.example.ClothingStoreManagementAPI.model.Enum.Role;

import jakarta.transaction.Transactional;

import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, String> {

	List<Users> findByRoleNot(Role role);

	// trả về id người dùng lớn nhất
	@Query("SELECT MAX(idUser) FROM Users")
	String SelectMaxId();

	// trả về thông tin người dùng bằng tên đăng nhập và mật khẩu
	@Query("SELECT u FROM Users u WHERE (u.username = :username OR u.phoneNumber = :username OR u.email =:username) AND u.password = :password")
	Users findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

	// trả về thông tin người dùng bằng số điện thoại (duy nhất)
	@Query("SELECT u FROM Users u WHERE u.phoneNumber = :phoneNumber")
	Users findByNumberPhone(@Param("phoneNumber") String phoneNumber);

	// trả về thông tin người dùng bằng tên đăng nhập
	@Query("SELECT u FROM Users u WHERE u.username = :username")
	Users findByNameuser(@Param("username") String username);

	// trả về thông tin người dùng bằng email
	@Query("SELECT u FROM Users u WHERE u.email = :email")
	Users findByEmail(@Param("email") String email);

	// tìm kiếm tất cả nhân viên của kho , hay shop , hay các quản lý hay tìm kiếm
	// người dùng
	@Query("SELECT u FROM Users u WHERE u.role = :role")
	List<Users> SellectByRole(@Param("role") String role);

	// tìm kiếm tên người dùng dựa trên id
	@Query("SELECT u.fullName FROM Users u WHERE u.idUser = :idUser")
	String SellectFullName(@Param("idUser") String idUser);

	// tìm kiếm tất cả nhân viên hay quản lý của 1 shop
	@Query("SELECT u FROM Users u\r\n" + "INNER JOIN ListWarehouseInCharge l ON l.idStaff = u.idUser\r\n"
			+ "WHERE u.role = :role AND l.idShop = :idShop")
	List<Users> SellectByRoleAndShop(@Param("role") String role, @Param("idShop") String idShop);

	// cập nhật thông tin
	@Query("UPDATE Users u SET u.status=:status,u.role =:role, u.fullName =:fullName , u.address=:address,"
			+ "u.birthDay=:birthDay,u.gender =:gender, u.email=:email, u.phoneNumber =:phoneNumber , u.pathAvatar =:pathAvatar\r\n"
			+ "WHERE u.idUser =:idUser")
	@Modifying
	int UpdateUsers(@Param("idUser") String idUser, @Param("status") boolean status, @Param("role") Role role,
			@Param("fullName") String fullName, @Param("address") String address, @Param("birthDay") LocalDate birthDay,
			@Param("gender") boolean gender, @Param("email") String email, @Param("phoneNumber") String phoneNumber,
			@Param("pathAvatar") String pathAvatar);

	@Modifying
	@Transactional
	@Query("UPDATE Users u SET u.status = :status WHERE u.idUser = :idUser")
	int updateStatusById(String idUser, boolean status);

	@Modifying
	@Transactional
	@Query("UPDATE Users u SET u.password = :pass WHERE u.idUser = :idUser")
	int updatepass(@Param("idUser") String idUser, @Param("pass") String pass);

	@Modifying
	@Transactional
	@Query("UPDATE Users SET pathAvatar=:pathAvatar WHERE idUser =:idUser")
	int updatePathAvatar(@Param("idUser") String idUser, @Param("pathAvatar") String pathAvatar);
}