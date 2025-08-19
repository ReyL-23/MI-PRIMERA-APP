import { Component, inject } from '@angular/core';
import { Autenticacion } from '../servicios/autenticacion';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  imports: [NgbCollapseModule],
  templateUrl: './navegacion.html',
  styleUrl: './navegacion.css'
})
export class Navegacion {
  private readonly autenticacion = inject(Autenticacion);
  private readonly router = inject(Router)
  estaColapsada = true;

  estaAutenticado() {
    return this.autenticacion.estaAutenticado();
  }

  cerrarSesion() {
    this.autenticacion.cerrarSesion();
  }
  iniciarSesion() {
    this.router.navigateByUrl("/acceso")

  }

}
