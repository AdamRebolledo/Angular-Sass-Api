import { Component, OnInit } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { calculo } from '../calculator/calculo.models';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  resultado:number;

  constructor() { 
   
  }

  ngOnInit() {
  }

  pasoEntreComponentes(num : number){
this.resultado = num;
console.log(this.resultado);
  }


}
