package com.example.ClothingStoreManagementAPI.controller;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ClothingStoreManagementAPI.model.DTO.*;
import com.example.ClothingStoreManagementAPI.model.Entity.Users;
import com.example.ClothingStoreManagementAPI.model.DataRequest.LoginData;
import com.example.ClothingStoreManagementAPI.service.Common;
import com.example.ClothingStoreManagementAPI.service.LoginService;
import java.util.HashMap;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class LoginController {
	@Autowired
	private LoginService service;
	@Autowired
	private Common common;
    @PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginData request) {
    	Users user = service.IsExistAccount(request);
        if (user!=null) {
        	if(user.isStatus()) return ResponseEntity.ok(new HashMap<String, Object>() {{
        	    put("status","200");
        	    put("data", new UserLoginDTO(user.getIdUser(),user.getFullName(),user.getIdRole(),user.getEmail(),user.getAddress()));
        	}});
        	else return ResponseEntity.ok(new HashMap<String, String>() {{
        	    put("status","201");
        	    put("Messenger","account inactive!");
        	}});
        }
        return ResponseEntity.ok(new HashMap<String, String>() {{
        	put("status","404");
    	    put("Messenger","Incorrect account or password !");
    	}});
    }
}