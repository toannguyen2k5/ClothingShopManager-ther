package com.example.shopmanager.controller;

import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.shopmanager.util.NetworkUtil;

@RestController
@RequestMapping("/api/network")
public class NetworkController {

	@GetMapping("/mac")
	public ResponseEntity<?> getMac() {
		String mac = NetworkUtil.getMacAddress();
		Map<String, String> response = new HashMap<>();
		response.put("macAddress", mac);
		return ResponseEntity.ok(response);
	}
}
