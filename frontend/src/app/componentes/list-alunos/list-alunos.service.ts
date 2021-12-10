import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators'

//http
import { HttpClient } from '@angular/common/http'

import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class ListAlunosService {

  private readonly API= 'http://localhost:3000/alunos'

  list() {
    return this.http.get<Aluno[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );

  }

  constructor(private http: HttpClient) { }

  creat(aluno: any) {
    return this.http.post(this.API, aluno).pipe(take(1));
  }
}
