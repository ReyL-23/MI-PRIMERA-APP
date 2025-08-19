import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
interface Juegos {
  nombre: string;
  desarrollador: "Nintendo" | "Xbox" | "Pc" | "Playstation";
  fecha: string;
  imagen: string;

}

@Component({
  selector: 'app-tops',
  imports: [NgbNavModule],
  templateUrl: './tops.html',
  styleUrl: './tops.css'
})
export class Tops {
  juegos: Juegos[] = [{
    nombre: 'The Legend of Zelda: Breath of the Wild',
    desarrollador: 'Nintendo',
    fecha: '2017',
    imagen: 'img/zelda.jpg',
  },
  {
    nombre: 'Super Mario Odyssey',
    desarrollador: 'Nintendo',
    fecha: '2017',
    imagen: 'img/mario.jpg',
  },

  ]
  juegonintendo = this.juegos.filter(x => x.desarrollador === "Nintendo")
  juegoxbox = this.juegos.filter(x => x.desarrollador === "Xbox")
  juegopc = this.juegos.filter(x => x.desarrollador === "Pc")
  juegoplaystation = this.juegos.filter(x => x.desarrollador === "Playstation")

}

