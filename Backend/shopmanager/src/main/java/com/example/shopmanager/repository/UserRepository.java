package com.example.shopmanager.repository;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shopmanager.entity.User;
import com.example.shopmanager.enums.Role;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
	List<User> findAllByRole(Role role);

	List<User> findAllByRoleIn(List<Role> roles); // Get users by multiple roles

	Optional<User> findByUsername(String username);

	Optional<User> findByEmail(String email); // Thêm method này

	boolean existsByUsername(String username);

	@EntityGraph(attributePaths = { "purchaseSlipsCreated", "purchaseSlipsCreated.details" })
	@Query("SELECT DISTINCT u FROM User u JOIN u.purchaseSlipsCreated v JOIN v.details c")
	List<User> getFullUser();

	@Query("SELECT MAX(idUser) FROM User")
	String getMaxId();
}
