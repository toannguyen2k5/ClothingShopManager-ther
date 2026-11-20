package com.example.ClothingStoreManagementAPI.product.common;

public class CommonUtil {
	public static int tryParseInt(String value) {
		try {
			int number = Integer.parseInt(value);
			if (number <= 0)
				return -1;
			return number;
		} catch (NumberFormatException e) {
			return -1;
		}
	}
}
