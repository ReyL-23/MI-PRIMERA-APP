import { Component, inject } from '@angular/core';
import { Publicacion, PublicacionesServicio } from '../../servicios/publicaciones';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Autenticacion } from '../../servicios/autenticacion';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PublicacionDialogo } from './publicacion-dialogo/publicacion-dialogo';
import { tap } from 'rxjs';

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

  estaAutenticado() {
    return this.autenticacion.estaAutenticado();
  }

  /** Abrimos el dialogo con el formulario para crear la neuva publicacion. Le
    * pasamos la configuracion `centered: true` para que aparezca centrado
    * verticalmente. */
  nuevaPublicacionDialogo() {
    const dialogRef = this.dialogoServicio.open(PublicacionDialogo, { centered: true });
    (dialogRef.componentInstance as PublicacionDialogo).accion.set('Crear');
  }

  editarPublicacion(publicacion: Publicacion) {
    console.log (publicacion)
    const dialogRef = this.dialogoServicio.open(PublicacionDialogo, { centered: true });
    (dialogRef.componentInstance as PublicacionDialogo).modelo.set(publicacion);
    (dialogRef.componentInstance as PublicacionDialogo).accion.set('Editar');
  }

  eliminarPublicacion(publicacion: Publicacion) {
    this.publicacionesServicio.eliminarPublicacion(publicacion._id || '').pipe(
      tap({
        error: (err) => {
          console.error('Hubo un error eliminando esta publicacion', err.message);
        },
      })
    ).subscribe();
  }


}

