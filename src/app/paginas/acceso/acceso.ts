import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from "@angular/forms"

interface Usuario {
  correo: string;
  contrasena: string;

}

@Component({
  selector: 'app-acceso',
  imports: [FormsModule],
  templateUrl: './acceso.html',
  styleUrl: './acceso.css'
})
export class Acceso {
  usuario: Usuario = { correo: "", contrasena: "" }

  alsubir(formulario: NgForm) { console.log("subir formulario"); console.log(formulario.value) }
}

