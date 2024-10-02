//Autor: Felippe Ramos
//Criado em: 02/09/2024
//Modificado em:02/09/2024

package vagas.com.blog.fatec.model.entity;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vagas.com.blog.fatec.utils.UserRole;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "user_table")
public class User implements UserDetails {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID id;

	@Column(nullable = false, length = 100)
	private String nome;

	@Column(nullable = false, unique = true)
	private String email;

	@Column(nullable = false)
	private String senha;

	@Column(name = "create_on", nullable = false, columnDefinition = "DATE")
	private LocalDateTime createOn;

	@Column(name = "updated_on", nullable = false, columnDefinition = "DATE")
	private LocalDateTime updatedOn;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false, name = "role")
	private UserRole role;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		if (this.role == UserRole.USER)
			return List.of(new SimpleGrantedAuthority("ROLE_USER"));
		return null;
	}

	@Override
	public String getPassword() {
		return senha;
	}

	@Override
	public String getUsername() {
		return nome;
	}

}
