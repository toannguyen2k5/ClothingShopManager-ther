package com.example.shopmanager.enums;

public enum Role {
	admin(99), staff(5), manager(10), customer(0);

	private final int level;

	Role(int level) {
		this.level = level;
	}

	public int getLevel() {
		return level;
	}

	public boolean hasPermission(Role requiredRole) {
		return this.level >= requiredRole.level;
	}
}
