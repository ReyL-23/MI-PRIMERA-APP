import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
interface Juegos {
  nombre: string;
  plataforma: "Nintendo" | "Xbox" | "Pc" | "Playstation";
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
    plataforma: 'Nintendo',
    fecha: '2017',
    imagen: 'img/zelda.jpg',
  },
  {
    nombre: 'Super Mario Odyssey',
    plataforma: 'Nintendo',
    fecha: '2017',
    imagen: 'img/mario.jpg',
  },
  {
    nombre: 'Metroid Prime',
    plataforma: 'Nintendo',
    fecha: '2002',
    imagen: 'img/metroid.jpg',
  },
  {
    nombre: 'Pokémon',
    plataforma: 'Nintendo',
    fecha: '1996',
    imagen: 'img/pokemon.jpg',
  },
  {
    nombre: 'Super Smash Bros',
    plataforma: 'Nintendo',
    fecha: '2018',
    imagen: 'img/smash.jpg',
  },
  {
    nombre: 'The Last of Us',
    plataforma: 'Playstation',
    fecha: '2013',
    imagen: 'img/tlou.jpg',
  },
  {
   nombre: 'God of War',
    plataforma: 'Playstation',
    fecha: '2018',
    imagen: 'img/gow.jpg',
  },
   {
   nombre: 'Bloodborne',
    plataforma: 'Playstation',
    fecha: '2015',
    imagen: 'img/bloodborne.jpg',
  },
  {
   nombre: 'Uncharted 4',
    plataforma: 'Playstation',
    fecha: '2016',
    imagen: 'img/uncharted4.jpg',
  },
  {
   nombre: 'Shadow of the Colossus',
    plataforma: 'Playstation',
    fecha: '2005',
    imagen: 'img/sotc.jpg',
  },
  {
   nombre: 'Halo 3',
    plataforma: 'Xbox',
    fecha: '2007',
    imagen: 'img/halo3.jpg',
  },
  {
   nombre: 'Forza Horizon 5',
    plataforma: 'Xbox',
    fecha: '2021',
    imagen: 'img/forza5.jpg',
  },
  {
   nombre: 'Gear of War 3',
    plataforma: 'Xbox',
    fecha: '2011',
    imagen: 'img/gow3.jpg',
  },
  {
   nombre: 'Fable II',
    plataforma: 'Xbox',
    fecha: '2008',
    imagen: 'img/fable2.jpg',
  },
  {
   nombre: 'Sea of Thieves',
    plataforma: 'Xbox',
    fecha: '2018',
    imagen: 'img/seaofthieves.jpg',
  },
  {
   nombre: 'Half-Life 2',
    plataforma: 'Pc',
    fecha: '2004',
    imagen: 'img/hl2.jpg',
  },
  {
   nombre: 'The Witcher 3',
    plataforma: 'Pc',
    fecha: '2015',
    imagen: 'img/witcher3.jpg',
  },
 {
   nombre: 'DOOM',
    plataforma: 'Pc',
    fecha: '1993',
    imagen: 'img/doom.jpg',
  },
   {
   nombre: 'League of Legends',
    plataforma: 'Pc',
    fecha: '2009',
    imagen: 'img/lol.jpg',
  },
   {
   nombre: 'Minecarft',
    plataforma: 'Pc',
    fecha: '2011',
    imagen: 'img/minecraft.jpg',
  },
 
  ]
  juegonintendo = this.juegos.filter(x => x.plataforma === "Nintendo")
  juegoxbox = this.juegos.filter(x => x.plataforma === "Xbox")
  juegopc = this.juegos.filter(x => x.plataforma === "Pc")
  juegoplaystation = this.juegos.filter(x => x.plataforma === "Playstation")

}

