import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators'

//http
import { HttpClient } from '@angular/common/http'

import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class ListAlunosService {

  private readonly API= 'http://localhost:8080/estudantes'
  
  constructor(private http: HttpClient) { }
  
  list() {
    return this.http.get<Aluno[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );

  }

  loadByID(id: number){
    return this.http.get<Aluno>(`${this.API}/${id}`).pipe(take(1));   
  }

  creat(aluno: Aluno) {
    return this.http.post(this.API, aluno).pipe(take(1));
  }
}
