package com.example.shopmanager.security;

import com.example.shopmanager.enums.Role;
import java.lang.annotation.*;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface CheckRole {
	Role[] allowedRoles(); // Danh sách quyền được phép
}
