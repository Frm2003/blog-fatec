package vagas.com.blog.fatec.model.entity;

import java.util.UUID;

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
import vagas.com.blog.fatec.utils.Curso;

@Getter
@NoArgsConstructor
@Setter
@Entity
@Table(name = "vaga_table")
public class Vaga {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID id;

	@Column(nullable = false)
	private String objetivo;

	@Column(name = "nome_empresa", nullable = true)
	private String nomeEmpresa;

	@Column(name = "link_da_vaga", nullable = false)
	private String linkDaVaga;

	@Enumerated(EnumType.STRING)
	@Column(name = "area_curso", nullable = false)
	private Curso area;

	@Column(nullable = false)
	private boolean situacao;
	
	@Column
	private String funcao;
}

/*
 * Implementar a parte de beneficios implemetar caracteristicas da vaga
 * 
 */
