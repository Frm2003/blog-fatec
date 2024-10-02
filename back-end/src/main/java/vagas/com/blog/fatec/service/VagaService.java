package vagas.com.blog.fatec.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import vagas.com.blog.fatec.model.dto.VagaDto;
import vagas.com.blog.fatec.model.entity.Vaga;
import vagas.com.blog.fatec.repository.VagaRepository;

@Service
public class VagaService {
	@Autowired
	private VagaRepository vagaRepository;

	public List<Vaga> selectAll() {
		return this.vagaRepository.findAll();
	}

	public Page<Vaga> selectAll(int page, int tamanho) {
		Pageable pageable = PageRequest.of(page, tamanho);
		return this.vagaRepository.findAll(pageable);
	}

	public Vaga selectById(UUID id) throws Exception {
		Optional<Vaga> optional = this.vagaRepository.findById(id);

		if (optional.isEmpty())
			throw new Exception("Dispositivo não encontrado.");

		return optional.get();
	}

	public Vaga insert(VagaDto vagaDto) {
		Vaga vagaModel = new Vaga();

		vagaModel.setObjetivo(vagaDto.objetivo());
		vagaModel.setNomeEmpresa(vagaDto.nomeEmpresa());
		vagaModel.setLinkDaVaga(vagaDto.linkDaVaga());
		vagaModel.setArea(vagaDto.area());
		vagaModel.setSituacao(true);
		vagaModel.setFuncao(vagaDto.funcao());

		return this.vagaRepository.save(vagaModel);
	}

	public Vaga update(UUID id, VagaDto vagaDto) throws Exception {
		Vaga vagaModel = selectById(id);

		vagaModel.setObjetivo(vagaDto.objetivo());
		vagaModel.setNomeEmpresa(vagaDto.nomeEmpresa());
		vagaModel.setLinkDaVaga(vagaDto.linkDaVaga());
		vagaModel.setArea(vagaDto.area());
		vagaModel.setFuncao(vagaDto.funcao());

		if (vagaDto.situacao().equals("ativo")) {
			vagaModel.setSituacao(true);
		} else {
			vagaModel.setSituacao(false);
		}

		return this.vagaRepository.save(vagaModel);
	}

	public Vaga delete(UUID id) throws Exception {
		Vaga vagaModel = selectById(id);
		this.vagaRepository.delete(vagaModel);
		return vagaModel;
	}

}
