package com.example.shopmanager.entity;

import java.io.Serializable;
import java.util.Objects;

public class ShopInventoryId implements Serializable {
	private String shop;
	private String variant;

	// constructors, equals, hashCode
	public ShopInventoryId() {
	}

	public ShopInventoryId(String shop, String variant) {
		this.shop = shop;
		this.variant = variant;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (!(o instanceof ShopInventoryId))
			return false;
		ShopInventoryId that = (ShopInventoryId) o;
		return Objects.equals(shop, that.shop) && Objects.equals(variant, that.variant);
	}

	@Override
	public int hashCode() {
		return Objects.hash(shop, variant);
	}
}