import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  aluno: any = {
    ra: '',
    nome: '',
    curso: '',
    semestre: '',
    periodo: ''
  }

  onSubmit(f: NgForm){
    console.log(f);
    console.log(this.aluno)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
