package com.example.shopmanager.util;

import java.lang.reflect.*;
import java.util.*;

public class DepthNullifierUtil {

	public static void nullifyFieldsBeyondDepth(Object obj, int maxDepth) {
		nullifyRecursive(obj, 1, maxDepth, new IdentityHashMap<>());
	}

	private static void nullifyRecursive(Object obj, int currentDepth, int maxDepth, Map<Object, Boolean> visited) {
		if (obj == null || currentDepth > maxDepth || visited.containsKey(obj))
			return;

		visited.put(obj, true);

		for (Field field : obj.getClass().getDeclaredFields()) {

			int modifiers = field.getModifiers();

			// Bỏ qua static, final
			if (Modifier.isStatic(modifiers) || Modifier.isFinal(modifiers)) {
				continue;
			}

			field.setAccessible(true);
			try {
				Object value = field.get(obj);
				if (value == null)
					continue;

				// Skip primitives or wrappers or String
				if (isPrimitiveOrWrapperOrString(field.getType()))
					continue;

				// Nếu là Collection thì duyệt từng phần tử
				if (Collection.class.isAssignableFrom(field.getType())) {
					Collection<?> collection = (Collection<?>) value;
					for (Object item : collection) {
						nullifyRecursive(item, currentDepth + 1, maxDepth, visited);
					}
				}
				// Nếu là Map thì duyệt value
				else if (Map.class.isAssignableFrom(field.getType())) {
					Map<?, ?> map = (Map<?, ?>) value;
					for (Object entryValue : map.values()) {
						nullifyRecursive(entryValue, currentDepth + 1, maxDepth, visited);
					}
				}
				// Nếu là object thường (Entity khác)
				else {
					if (currentDepth + 1 > maxDepth) {
						field.set(obj, null); // quá depth → set null
					} else {
						nullifyRecursive(value, currentDepth + 1, maxDepth, visited);
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	private static boolean isPrimitiveOrWrapperOrString(Class<?> type) {
		return type.isPrimitive() || type == String.class || Number.class.isAssignableFrom(type)
				|| Boolean.class.isAssignableFrom(type) || Character.class.isAssignableFrom(type)
				|| Date.class.isAssignableFrom(type) || Enum.class.isAssignableFrom(type);
	}
}
