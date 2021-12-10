import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from '../pages/routing.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports:[
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class SharedModule { }
