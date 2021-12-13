package com.example.estudantes.repository;

import com.example.estudantes.entity.Estudante;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EstudanteRepository extends JpaRepository<Estudante,Integer>{
    
}
