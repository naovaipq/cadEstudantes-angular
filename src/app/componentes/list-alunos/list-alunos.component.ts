import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno';
import { ListAlunosService } from './list-alunos.service';

@Component({
  selector: 'list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.css']
})
export class ListAlunosComponent implements OnInit {

  alunos: Aluno[] = [];

  constructor(private service: ListAlunosService) { }

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos() {
    this.service.list().subscribe(alunos => this.alunos = alunos);
  }

}
