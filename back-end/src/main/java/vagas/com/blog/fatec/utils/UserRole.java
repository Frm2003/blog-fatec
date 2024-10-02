package vagas.com.blog.fatec.utils;

import lombok.Getter;
import lombok.Setter;

public enum UserRole {
	USER("user");

	@Getter
	@Setter
	private String role;

	private UserRole(String role) {
		this.role = role;
	}
}
