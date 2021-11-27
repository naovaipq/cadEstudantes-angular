import { Injectable } from '@angular/core';

//http
import { HttpClient } from '@angular/common/http'
import { Alunos } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class ListAlunosService {

  private readonly API= 'http://localhost:3000/alunos'

  list() {
    return this.http.get<Alunos[]>(this.API);
  }

  constructor(private http: HttpClient) { }
}
