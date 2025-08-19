import { Component, inject } from '@angular/core';
import { PublicacionesServicio } from '../../servicios/publicaciones';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Autenticacion } from '../../servicios/autenticacion';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PublicacionDialogo } from './publicacion-dialogo/publicacion-dialogo';

@Component({
  selector: 'app-publicaciones',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './publicaciones.html',
  styleUrl: './publicaciones.css'
})
export class Publicaciones {
  private readonly publicacionesServicio = inject(PublicacionesServicio);
  private readonly dialogoServicio = inject(NgbModal);
  private readonly autenticacion = inject(Autenticacion);


  publicaciones$ = this.publicacionesServicio.obtenerTodasPublicaciones();

  /** Abrimos el dialogo con el formulario para crear la neuva publicacion. Le
   * pasamos la configuracion `centered: true` para que aparezca centrado
   * verticalmente. */
  nuevaPublicacionDialogo() {
    this.dialogoServicio.open(PublicacionDialogo, { centered: true });
  }

  estaAutenticado() {
    return this.autenticacion.estaAutenticado();
}
}

