package vagas.com.blog.fatec.repository;

import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vagas.com.blog.fatec.model.entity.Vaga;

@Repository
public interface VagaRepository extends JpaRepository<Vaga, UUID> {
	Page<Vaga> findAll(Pageable pageable);
}
