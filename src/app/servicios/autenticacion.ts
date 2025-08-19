import { Injectable } from '@angular/core';
import { of, tap, throwError } from 'rxjs';

interface InicioSesionCredenciales {
	correo: string;
	contraseña: string;
}

@Injectable({
	providedIn: 'root',
})
export class Autenticacion {
	private readonly AUTH_TOKEN_LLAVE = 'projecto_auth_token';
	private readonly AUTH_TOKEN_VALOR = 'auth-token-prueba-123';

	private usuarioPrueba = {
		correo: 'prueba@gmail.com',
		contraseña: '123456',
	};

	/**
	 * Validamos que sea el mismo correo y contraseña de prueba para mostrar como
	 * funciona la "validación". Si todo sale bien, guardamos un "token" (o codigo) de
	 * seguridad en vez del correo y la contraseña.
	 *
	 * @param credenciales 
	 */
	iniciarSesion(credenciales: InicioSesionCredenciales) {
		if (credenciales.correo === this.usuarioPrueba.correo && credenciales.contraseña === this.usuarioPrueba.contraseña) {
			localStorage.setItem(this.AUTH_TOKEN_LLAVE, this.AUTH_TOKEN_VALOR);
			return of(true).pipe(
				tap(() => console.log('😃 Todo salio bien! Token guardado.'))
			);
		} else {
			return throwError(() => new Error('😔 Las credenciales de inicio de sesión estan mal.'))
		}
	}

	/**
	 * Cuando el usuario quiera salirse, eliminamos el "token" que habiamos
	 * guardado.
	 */
	cerrarSesion() {
		localStorage.removeItem(this.AUTH_TOKEN_LLAVE);
	}

	/**
	 * Con esto verificamos si el "token" existe en el LocalStorage.
	 */
	estaAutenticado() {
		return !!localStorage.getItem(this.AUTH_TOKEN_LLAVE)
	}
}
