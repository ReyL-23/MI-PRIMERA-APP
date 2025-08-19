import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Autenticacion } from '../../servicios/autenticacion';
import { tap } from 'rxjs';

@Component({
  selector: 'app-acceso',
  imports: [ReactiveFormsModule],
  templateUrl: './acceso.html',
  styleUrl: './acceso.css',
  standalone: true,
})
export class Acceso {
  private readonly router = inject(Router);
  private readonly autenticacion = inject(Autenticacion);

  mensajeError: string | null = null;

  /** El formulario de este componente. Solo necesitamos un correo y una contraseña. */
  iniciarSesionFormulario = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  /** Nos devuelve el campo de correo, asi lo usamos en el html sin problemas. */
  get correo() {
    return this.iniciarSesionFormulario.controls.correo;
  }

  /** Nos devuelve el campo de contraseña, asi lo usamos en el html sin problemas. */
  get contrasena() {
    return this.iniciarSesionFormulario.controls.contrasena;
  }

  iniciarSesion() {
    /** 
     * Si el formulario es valido, ejecutamos una llamada a nuestro servicio
     * "Autenticacion" para guardar la información en el "LocalStorage".
     * Mientras tanto, solo lo redirigimos a la ruta de navegacion de inicio. Si
     * no es valido, reiniciamos el formulario. 
     */
    if (this.iniciarSesionFormulario.valid) {
      // console.group('Inicio de sesion');
      // console.log(this.iniciarSesionFormulario.value);
      // console.groupEnd();

      // this.router.navigateByUrl('/inicio');

      this.autenticacion.iniciarSesion({
        correo: this.iniciarSesionFormulario.value.correo || '',
        contraseña: this.iniciarSesionFormulario.value.contrasena || '',
      }).pipe(
        tap({
          next: () => {
            console.log('🚀 Inicio de sesión exitoso, navegando a la ruta de inicio 🚀');
            this.router.navigateByUrl('/inicio');
          },
          error: (err) => {
            this.mensajeError = err.message;
          }
        })
      ).subscribe()

    } else {
      console.error('Datos invalidos!');
    }
  }


}
