import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';

//pages
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesComponent } from './detalhes/detalhes.component';


@NgModule({
  declarations: [
    CadastroComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class PagesModule {
    
 }
