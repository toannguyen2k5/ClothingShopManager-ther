package com.example.ClothingStoreManagementAPI.config;
import jakarta.annotation.PostConstruct; // dùng cho Java 11+, Spring Boot 3
//hoặc: import javax.annotation.PostConstruct; // dùng cho Java 8, Spring Boot 2

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

 @PostConstruct
 public void init() {
     System.out.println("✅ WebConfig loaded...");
 }

 @Bean
 public WebMvcConfigurer corsConfigurer() {
     return new WebMvcConfigurer() {
         @Override
         public void addCorsMappings(CorsRegistry registry) {
             registry.addMapping("/**")
                     .allowedOriginPatterns("*")
                     .allowedMethods("*")
                     .allowedHeaders("*")
                     .allowCredentials(true);
         }
     };
 }
}
