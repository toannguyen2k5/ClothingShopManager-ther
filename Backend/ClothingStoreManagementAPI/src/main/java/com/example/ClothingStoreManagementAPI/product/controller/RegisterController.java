package com.example.ClothingStoreManagementAPI.product.controller;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.ClothingStoreManagementAPI.product.model.Entity.*;
import com.example.ClothingStoreManagementAPI.product.model.Enum.ResultStatus;
import com.example.ClothingStoreManagementAPI.product.service.Common;
import com.example.ClothingStoreManagementAPI.product.service.RegisterService;
import com.example.ClothingStoreManagementAPI.product.model.DTO.UserRegisterDTO;

@CrossOrigin(origins = "http://localhost:3000") // Cho phép React truy cập
@RestController
@RequestMapping("/api/auth/register")
public class RegisterController {
	@Autowired
	private RegisterService service ;
	@Autowired
	private Common common;
	@GetMapping("/checknumberphone")
	public ResponseEntity<?> checPhoneNumber(@RequestParam String phoneNumber) {
		UserRegisterDTO UserRegisterDTO = service.FindInforByPhoneNumber(phoneNumber);
		return ResponseEntity.ok(common.ReturnReponse(UserRegisterDTO, "Check", "phoneNumber"));
    }
	@PostMapping("/createaccount")
	public ResponseEntity<?> CreateOrUppdateInforAccount(@RequestBody Users user){
		ResultStatus result = service.CreateOrUppdateInfor(user);
		if(result == ResultStatus.error) {
			return ResponseEntity.ok(new HashMap<String,String>(){{
				put("Status","404");
				put("Messenger","create account error");
				}});
		}
		else if(result == ResultStatus.email_error) {
			return ResponseEntity.ok(new HashMap<String,String>(){{
				put("Status","404");
				put("Messenger","This email has been registered !");
				}});
		}
		else if(result == ResultStatus.username_error) {
			return ResponseEntity.ok(new HashMap<String,String>(){{
				put("Status","404");
				put("Messenger","This username has been registered !");
				}});
		}
		else return ResponseEntity.ok(new HashMap<String,String>(){{
			put("Status","404");
			put("Messenger","create account successfully");
			}});
	}
}
