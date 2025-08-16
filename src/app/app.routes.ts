import { Routes } from '@angular/router';
import { Historia } from './paginas/historia/historia';
import { Acceso } from './paginas/acceso/acceso';
import { Plataformas } from './paginas/plataformas/plataformas';
import { Tops } from './paginas/tops/tops';
import { Galeria } from './paginas/galeria/galeria';
import { Contacto } from './paginas/contacto/contacto';
import { Blogs } from './paginas/blogs/blogs';
import { Inicio } from './paginas/inicio/inicio';

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
        component: Blogs,
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
