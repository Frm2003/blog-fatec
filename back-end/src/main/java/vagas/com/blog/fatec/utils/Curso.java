package vagas.com.blog.fatec.utils;

import lombok.Getter;
import lombok.Setter;

public enum Curso {
    ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS("Análise e Desenvolvimento de Sistemas"),
    AMS_ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS("AMS - Análise e Desenvolvimento de Sistemas"),
    DESENVOLVIMENTO_DE_SOFTWARE("Desenvolvimento de Software"),
    COMERCIO_EXTERIOR("Comércio Exterior"),
    DESENVOLVIMENTO_DE_PRODUTOS_PLASTICOS("Desenvolvimento de Produtos Plásticos"),
    GESTAO_EMPRESARIAL("Gestão Empresarial"),
    GESTAO_DE_RECURSOS_HUMANOS("Gestão de Recursos Humanos"),
    LOGISTICA("Logística"),
    POLIMEROS("Polímeros");

	@Getter
	@Setter
    private String nome;
	
	private Curso(String nome) {
		this.nome = nome;
	}
}
