import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{EquipoService} from './../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

individuo:any[] = [];

  constructor( private ruta:ActivatedRoute, private _servicio:EquipoService ) { 

this.ruta.params.subscribe(params=>{ //guardar el id de la url obteniendo el 'id' generado en la ruta como ruta dinamica por activatedroute 
  console.log(params['id']);
  
  this.individuo = this._servicio.obtenerUno(params['id'])
})

  }

  ngOnInit() {
  }

}
