package com.example.estudantes.controller;

import java.util.List;
import java.util.Optional;

import com.example.estudantes.entity.Estudante;
import com.example.estudantes.repository.EstudanteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/estudantes")
@CrossOrigin
public class EstudanteController {

    @Autowired
    private EstudanteRepository repo;

    //end point GET
    @GetMapping
    public List<Estudante> getEstudantes() {
        List<Estudante> list = repo.findAll();
        return list;
    }

    //end point POST
    @PostMapping
    public Estudante salvar(@RequestBody Estudante estudante) {
        estudante = repo.save(estudante);
        return estudante;
    }

    //end point GetByRA
    @GetMapping("{id}")
    public Estudante getEstudante(@PathVariable Integer id) {
        Optional<Estudante> op =  repo.findById(id);
        Estudante estudante = op.orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return estudante;
    }

}
