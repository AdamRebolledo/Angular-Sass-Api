import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

equipo:any[] = [
  { 
    name:'Adam Rebolledo Olivares',
    especialidad:'JAVA',
    descripcion:'nosotros works! Lorem ipsum dolor sit amet, consectetu nosotros works! Lorem ipsum dolor sit amet, consectetu'
  },
  { 
    name:'josh peretanos gomez',
    especialidad:'html',
    descripcion:'nosotros works! Lorem ipsum dolor sit amet, consectetu nosotros works! Lorem ipsum dolor sit amet, consectetu'
  }
]

saludar = new EventEmitter<string>();

  constructor() { 
    console.log('funcionando servicio');
  }

  obtenerEquipo(){
    return this.equipo;
  }
  obtenerUno(i){
    return this.equipo[i];
  }
}
