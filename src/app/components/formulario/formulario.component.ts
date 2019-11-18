import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formularioPractica:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
   
    this.formularioPractica = this.formBuilder.group({
      
      NombrePropietario:["", [Validators.required]],
      ApellidoPropietario:[""],
     
    });
    
  }

  FuncionFormulario(){

    alert("Entro a la funcion")
     alert(this.formularioPractica.controls['NombrePropietario'].value);
     alert(this.formularioPractica.controls['ApellidoPropietario'].value);

  }

}
