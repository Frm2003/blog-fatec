package vagas.com.blog.fatec.model.dto;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import vagas.com.blog.fatec.utils.Curso;

public record VagaDto(@NotBlank String objetivo, String nomeEmpresa, @NotBlank String linkDaVaga, @NotNull Curso area,
		@NotBlank String situacao, @NotBlank String funcao) {

}
