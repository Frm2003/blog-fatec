package vagas.com.blog.fatec.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.data.web.config.EnableSpringDataWebSupport.PageSerializationMode;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import vagas.com.blog.fatec.model.dto.VagaDto;
import vagas.com.blog.fatec.model.entity.Vaga;
import vagas.com.blog.fatec.service.VagaService;

@RestController
@RequestMapping("/vagas")
@EnableSpringDataWebSupport(pageSerializationMode = PageSerializationMode.VIA_DTO)
public class VagaController {
	@Autowired
	private VagaService vagaService;

	@GetMapping("/list")
	public ResponseEntity<List<Vaga>> selectAll() {
		return ResponseEntity.status(HttpStatus.OK).body(this.vagaService.selectAll());
	}

	@GetMapping	
	public ResponseEntity<Page<Vaga>> selectAll(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "1") int tamanho) {
		return ResponseEntity.status(HttpStatus.OK).body(this.vagaService.selectAll(page, tamanho));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Vaga> selectById(@PathVariable UUID id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(this.vagaService.selectById(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	@PostMapping
	public ResponseEntity<Vaga> insert(@RequestBody @Valid VagaDto vagaDto) {
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(this.vagaService.insert(vagaDto));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Vaga> update(@PathVariable UUID id, @RequestBody @Valid VagaDto vagaDto) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(this.vagaService.update(id, vagaDto));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Vaga> delete(@PathVariable UUID id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(this.vagaService.delete(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

}
