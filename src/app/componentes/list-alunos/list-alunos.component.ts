import { Component, OnInit } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Aluno } from './aluno';
import { ListAlunosService } from './list-alunos.service';

@Component({
  selector: 'list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.css']
})
export class ListAlunosComponent implements OnInit {

  //alunos: Aluno[] = [];

  alunos$: Observable<Aluno[]> | undefined;
  error$ = new Subject<boolean>();

  constructor(private service: ListAlunosService) { }

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos() {
    // this.service.list().subscribe(alunos => this.alunos = alunos);
    this.onRefresh();
  }

  onRefresh() {
    this.alunos$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return empty();
      })
    );
  }

}
