package com.example.shopmanager.security;

import java.util.HashMap;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.example.shopmanager.enums.Role;
import com.example.shopmanager.service.UserService;

@Aspect
@Component
public class RoleCheckAspect {

	@Autowired
	private UserService userService;

	@Pointcut("@annotation(com.example.shopmanager.security.CheckRole)")
	public void checkRolePointcut() {
	}

	@Around("checkRolePointcut() && @annotation(checkRole) && args(idUser,..)")
	public Object checkUserRole(ProceedingJoinPoint joinPoint, CheckRole checkRole, String idUser) throws Throwable {
		Role userRole = userService.getRoleByIdUser(idUser);
		if (userRole != null && userRole.hasPermission(checkRole.allowedRoles()[0])) {
			return joinPoint.proceed();
		} else {
			HashMap<String, Object> result = new HashMap<>();
			result.put("status", "403");
			result.put("Messenger", "Role" + " failed! ");
			return ResponseEntity.ok(result);
		}

	}
}
