package com.example.shopmanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class ShopmanagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopmanagerApplication.class, args);
	}

}
