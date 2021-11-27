import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//forms
import { FormsModule } from '@angular/forms';

//componentes
import { FormularioComponent } from './formulario/formulario.component';
import { ListAlunosComponent } from './list-alunos/list-alunos.component';
import { RoutingModule } from '../pages/routing.module';



@NgModule({
  declarations: [
    FormularioComponent,
    ListAlunosComponent
  ],
  exports:[
    FormularioComponent,
    ListAlunosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoutingModule
  ]
})
export class ComponentesModule { }
