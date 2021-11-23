import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//forms
import { FormsModule } from '@angular/forms';

//componentes
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  exports:[
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentesModule { }
