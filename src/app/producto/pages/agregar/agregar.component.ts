import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  colorMio:string = '#76D3E8'
  miFormulario:FormGroup = this.fb.group({
    nombre:['',Validators.required]
  })
  error(campo:string):boolean{
    return this.miFormulario.get(campo)?.invalid || false
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
