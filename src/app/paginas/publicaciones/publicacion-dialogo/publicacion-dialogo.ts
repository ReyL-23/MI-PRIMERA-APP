import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs';
import { Publicacion, PublicacionesServicio } from '../../../servicios/publicaciones';

@Component({
    selector: 'publicacion-dialogo',
    imports: [ReactiveFormsModule],
    templateUrl: 'publicacion-dialogo.html',
    styleUrl: 'publicacion-dialogo.css',
})

export class PublicacionDialogo {
    readonly dialogoActivo = inject(NgbActiveModal);
    private readonly publicacionesServicio = inject(PublicacionesServicio)

    mensajeError: string | null = null;

    formularioPublicacion = new FormGroup({
        titulo: new FormControl('', [Validators.required]),
        autor: new FormControl('', [Validators.required]),
        contenido: new FormControl('', [Validators.required]),
    });

    get titulo() {
        return this.formularioPublicacion.controls.titulo;
    }

    get autor() {
        return this.formularioPublicacion.controls.autor;
    }

    get contenido() {
        return this.formularioPublicacion.controls.contenido;
    }

    crearPublicacion() {
        if (this.formularioPublicacion.valid) {
            const datos: Publicacion = {
                titulo: this.formularioPublicacion.value.titulo || '', 
                contenido: this.formularioPublicacion.value.contenido || '',
                autor: this.formularioPublicacion.value.autor || '',
            }
            /** 
             * Ejecutamos el llamado del servicio para crear una nueva
             * publicacion. Si algun error surje, lo asignamos a la variable
             * "mensajeError".
             */
            this.publicacionesServicio.crearPublicacion(datos).pipe(
                tap({
                    error: (err) => {
                        this.mensajeError = err.message;
                    }, complete:() => {
                        this.dialogoActivo.close()
                    }

                })
            ).subscribe()

        } else {
            console.error('Datos invalidos!');
        }
    }
}