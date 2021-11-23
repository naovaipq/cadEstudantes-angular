import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ListAlunosComponent } from './list-alunos/list-alunos.component';



@NgModule({
  declarations: [
    FormularioComponent,
    ListAlunosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
