import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  public contador: number = 0;

  miFormulario: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    asunto: ['', Validators.required],
    textArea: ['', [Validators.required, Validators.maxLength(250)]],
  });

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  enviar() {
    console.log(this.miFormulario.value);
  }

  onKey( { target }: any) {
    this.contador = target.value.length
  }

}
