package com.example.shopmanager.util;

import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import java.util.*;
import java.util.regex.*;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.shopmanager.entity.Category;
import com.example.shopmanager.entity.Image;
import com.example.shopmanager.entity.Material;
import com.example.shopmanager.entity.ProductVariant;
import com.example.shopmanager.entity.Promotion;
import com.example.shopmanager.entity.PurchaseDetail;
import com.example.shopmanager.entity.SalesDetail;
import com.example.shopmanager.entity.Shop;
import com.example.shopmanager.entity.ShopInventory;
import com.example.shopmanager.entity.User;

@Service
public class CommonUtil {
	public String RemakeString(String strings) {
		var elements = strings.split("\\s+");
		Set<String> newString = new LinkedHashSet<>(Arrays.asList(elements));
		return String.join(" ", newString);
	}

	private boolean Check(String strings, String regex) {
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(strings);
		return matcher.find();
	}

//	public boolean CheckProperty(String strings , PropertyOption option) {
//		switch(option) {
//			case username :{
//				return Check(strings , "^[a-zA-Z](?!.*(__|\\.\\.))[a-zA-Z0-9_.]{2,19}$");
//			}
//			case numberPhone:{
//				return Check(strings , "^\\d{10}$");
//			}
//			case fullname:{
//				return Check(strings , "^[A-ZÀ-Ỹ][a-zà-ỹ]*(\\s[A-ZÀ-Ỹ][a-zà-ỹ]*)*$");
//			}
//			case password:{
//				return Check(strings , "^\\(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*])[a-zA-Z0-9]{8,20}$");
//			}
//			case email:{
//				return Check(strings , "^[a-zA-Z0-9][a-zA-Z0-9._-]*@[a-zA-Z]{2,}(\\\\.[a-zA-Z]{2,})*$");
//			}
//			default:{
//				System.out.print("error option propperty");
//				return false;
//			}
//		}
//	}
	private String CheckId(String strings, String regex) {
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(strings);
		if (matcher.find()) {
			return matcher.group();
		} else
			throw new IllegalArgumentException("valid id");
	}

	public String FindNextId(String idObject) {
		String result = null;
		String regexName = "[a-zA-Z]+";
		String regexId = "\\d+\\b";
		try {
			if (idObject != null) {
				String name = CheckId(idObject, regexName);
				long id = Long.parseLong(CheckId(idObject, regexId)) + 1;
				if (idObject.length() - String.valueOf(id).length() - name.length() >= 0)
					result = name + "0".repeat(idObject.length() - String.valueOf(id).length() - name.length())
							+ String.valueOf(id);
				else
					System.out.print("ran out of data");
			}
		} catch (Exception e) {
			System.out.print("error : " + e.getMessage());
		}
		return result;
	}

	@SuppressWarnings("rawtypes")
	public ResponseEntity<HashMap> ReturnReponse(Object value, String action, String nameObject) {
		HashMap<String, Object> result = new HashMap<>();
		if (value == null) {
			result.put("status", "404");
			result.put("Messenger", action + " failed! " + nameObject);
		} else if (value instanceof Boolean) {
			if ((Boolean) value) {
				result.put("status", "200");
				result.put("Messenger", action + " " + nameObject + " successfully!");
			} else {
				result.put("status", "404");
				result.put("Messenger", action + " failed! " + nameObject);
			}
		} else {
			result.put("status", "200");
			result.put("data", value);
		}

		return ResponseEntity.ok(result);
	}

	public static String nextId(String currentMaxId, String prefix, int length) {
		if (currentMaxId == null || currentMaxId.isEmpty()) {
			return prefix + String.format("%0" + length + "d", 1);
		}

		// Tìm vị trí bắt đầu của số cuối cùng trong chuỗi
		int index = currentMaxId.length();
		while (index > 0 && Character.isDigit(currentMaxId.charAt(index - 1))) {
			index--;
		}

		prefix = currentMaxId.substring(0, index); // phần chữ
		String numberPart = currentMaxId.substring(index); // phần số

		int number = numberPart.isEmpty() ? 0 : Integer.parseInt(numberPart);
		int nextNumber = number + 1;

		// Format lại giữ nguyên độ dài phần số
		String nextNumberFormatted = String.format("%0" + length + "d", nextNumber);

		return prefix + nextNumberFormatted;
	}

	public static <E, D> D convertToDto(E entity, Class<D> dtoClass) {
		try {
			D dto = dtoClass.getDeclaredConstructor().newInstance();

			for (Field dtoField : getAllFields(dtoClass)) {
				dtoField.setAccessible(true);
				try {
					Field entityField = getField(entity.getClass(), dtoField.getName());
					if (entityField == null)
						continue;

					entityField.setAccessible(true);
					Object value = entityField.get(entity);

					if (value instanceof List<?>) {
						List<?> entityList = (List<?>) value;
						if (!entityList.isEmpty()) {
							// Xác định kiểu phần tử trong list của DTO
							ParameterizedType listType = (ParameterizedType) dtoField.getGenericType();
							Class<?> dtoElementClass = (Class<?>) listType.getActualTypeArguments()[0];

							List<Object> dtoList = new ArrayList<>();
							for (Object item : entityList) {
								dtoList.add(convertToDto(item, dtoElementClass));
							}
							dtoField.set(dto, dtoList);
						} else {
							dtoField.set(dto, new ArrayList<>()); // nếu list rỗng
						}
					} else {
						dtoField.set(dto, value);
					}

				} catch (Exception ignored) {
					// bỏ qua lỗi từng field (nếu không match)
				}
			}

			return dto;
		} catch (Exception e) {
			throw new RuntimeException("Failed to convert entity to DTO", e);
		}
	}

	private static List<Field> getAllFields(Class<?> clazz) {
		List<Field> fields = new ArrayList<>();
		while (clazz != null) {
			fields.addAll(Arrays.asList(clazz.getDeclaredFields()));
			clazz = clazz.getSuperclass();
		}
		return fields;
	}

	private static Field getField(Class<?> clazz, String fieldName) {
		while (clazz != null) {
			try {
				return clazz.getDeclaredField(fieldName);
			} catch (NoSuchFieldException e) {
				clazz = clazz.getSuperclass(); // duyệt tiếp class cha
			}
		}
		return null;
	}
}
