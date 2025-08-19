import { Routes } from '@angular/router';
import { Historia } from './paginas/historia/historia';
import { Acceso } from './paginas/acceso/acceso';
import { Plataformas } from './paginas/plataformas/plataformas';
import { Tops } from './paginas/tops/tops';
import { Galeria } from './paginas/galeria/galeria';
import { Contacto } from './paginas/contacto/contacto';
import { Inicio } from './paginas/inicio/inicio';
import { Publicaciones } from './paginas/publicaciones/publicaciones';

export const routes: Routes = [
    {
        path: "historia",
        component: Historia
    },
    {
        path: "acceso",
        component: Acceso,
    },
    {
        path: "plataformas",
        component: Plataformas,
    },
    {
        path: "tops",
        component: Tops,
    },
    {
        path: "galeria",
        component: Galeria,
    },
    {
        path: "contacto",
        component: Contacto,
    },
    {
        path: "blogs",
        component: Publicaciones,
    },
    {
        path: "inicio",
        component: Inicio,
    },
    {
        path:"",
        redirectTo:"/inicio",
        pathMatch: "full",

    }






   /* {
        path: "",
        pathMatch: 'full',
        redirectTo: "acceso",
    },
    /* {
        path: "",
        children: [
            {
                path: "historia",
                component: Historia
            },
        ],
    }, */
];
