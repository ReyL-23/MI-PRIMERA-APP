import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/** Es el mismo modelo que hicimos en Mongoose para las publicaciones. */
export interface Publicacion {
	_id?: string;
	titulo: string;
	contenido: string;
	autor?: string;
	fecha?: Date;
}

@Injectable({
	providedIn: 'root'
})
export class PublicacionesServicio {
	private readonly http = inject(HttpClient);

	/* URL base de la API en Express.js */
	private _apiUrl = 'http://localhost:3000/api/blogs';

	/** Lee todas las publicaciones */
	obtenerTodasPublicaciones(): Observable<Publicacion[]> {
		return this.http.get<Publicacion[]>(this._apiUrl);
	}

	/** Crea una nueva publicacion. */
	crearPublicacion(publicacion: Publicacion): Observable<Publicacion> {
		return this.http.post<Publicacion>(this._apiUrl, publicacion);
	}

	/** Elimina una publicacion por su ID. */
	eliminarPublicacion(id: string): Observable<any> {
		const url = `${this._apiUrl}/${id}`;
		return this.http.delete(url);
	}

	/** Actualiza una publicacion por su ID. */
	actualizarPublicacion(id: string, publicacion: Publicacion): Observable<Publicacion> {
		const url = `${this._apiUrl}/${id}`;
		return this.http.put<Publicacion>(url, publicacion);
	}
}