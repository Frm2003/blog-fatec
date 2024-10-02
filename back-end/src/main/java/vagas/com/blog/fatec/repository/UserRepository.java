package vagas.com.blog.fatec.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import vagas.com.blog.fatec.model.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
	UserDetails findByEmail(String email);
}
