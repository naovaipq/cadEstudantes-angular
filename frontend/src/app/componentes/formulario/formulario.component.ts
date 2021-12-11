import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ListAlunosService } from '../list-alunos/list-alunos.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, 
              private service: ListAlunosService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id => this.service.loadByID(id))
    )
    .subscribe(aluno => this.updateForm(aluno));

    this.form = this.fb.group({
      ra: [null, [Validators.required, Validators.minLength(10) ,Validators.maxLength(10)]],
      nome: [null, [Validators.required, Validators.minLength(1)]],
      curso: [null, [Validators.required]],
      semestre: [null, [Validators.required]],
      periodo: [null, [Validators.required]],
    });
  }

  updateForm(aluno: any){
    this.form.patchValue({
      ra: aluno.ra,
      nome: aluno.nome
    })
  }
 
  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid){
      console.log('submit');
      this.service.creat(this.form.value).subscribe(
        sucess => {
          console.log('sucesso'),
          this.location.back()
      },
        error => console.error(error),
        () => console.log('request completo')
        
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

}
