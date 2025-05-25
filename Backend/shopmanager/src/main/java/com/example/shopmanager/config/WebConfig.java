package com.example.shopmanager.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**") // Cho phép tất cả các endpoint
				.allowedOrigins("*") // Cho phép tất cả các domain
				.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Cho phép các method HTTP
				.allowedHeaders("*") // Cho phép tất cả headers
				.allowCredentials(false) // Nếu dùng cookie hoặc xác thực thì bật true
				.maxAge(3600); // Cache pre-flight request trong 1 giờ
	}
}
