import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../list-alunos/aluno';
import { ListAlunosService } from '../list-alunos/list-alunos.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoResolverGuard implements Resolve<Aluno> {
  
  constructor(private service: ListAlunosService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Aluno | Observable<Aluno> | Promise<Aluno> {
    
    if(route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }
  }

  
  
  
}
