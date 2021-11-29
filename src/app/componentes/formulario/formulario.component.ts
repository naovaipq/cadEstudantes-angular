import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      ra: [null, [Validators.required, Validators.minLength(10) ,Validators.maxLength(10)]],
      nome: [null, [Validators.required, Validators.minLength(1)]],
      curso: [null, [Validators.required]],
      semestre: [null, [Validators.required]],
      periodo: [null, [Validators.required]],
    });
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid){
      console.log('submit');
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

}
