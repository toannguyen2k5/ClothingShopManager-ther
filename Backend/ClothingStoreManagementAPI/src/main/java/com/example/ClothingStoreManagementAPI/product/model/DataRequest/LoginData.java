package com.example.ClothingStoreManagementAPI.product.model.DataRequest;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginData {
	@JsonProperty("username")
	private String username ="";
	@JsonProperty("password")
	private String password ="";
	public LoginData() {}
	public LoginData(String username, String password) {
		this.username = username;
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String userName) {
		this.username = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
