import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { calculo } from './calculo.models';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  
  @Output() numGroup= new EventEmitter<number>();
 
  constructor() { }

  ngOnInit() {
  }
 
  enviarDatos(numPrimero: HTMLInputElement, numSegundo:HTMLInputElement){
    let numero1 = Number(numPrimero.value)
    let numero2 = Number(numSegundo.value)

    let numEnvio:number = numero1 +numero2; 
    this.numGroup.emit(numEnvio);
    
    numPrimero.value= "";
    numSegundo.value = "";
    
  }
}
