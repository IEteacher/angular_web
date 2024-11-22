import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  msg="";
  user="Carlos Rojo"
  pass="red123"
  validar(valor:String){
    if(this.user==valor)
      this.msg="Bienvenid@ "+valor;
  }
}
