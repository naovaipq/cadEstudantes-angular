import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';

//pages
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CadastroComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule {
    
 }
