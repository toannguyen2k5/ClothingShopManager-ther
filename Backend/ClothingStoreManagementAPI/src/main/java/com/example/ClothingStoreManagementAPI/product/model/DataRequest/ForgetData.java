package com.example.ClothingStoreManagementAPI.product.model.DataRequest;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class ForgetData {
	@JsonProperty("phoneNumber")
	private String phoneNumber;
	@JsonProperty("email")
	private String email;
	@JsonProperty("username")
	private String username;
}
