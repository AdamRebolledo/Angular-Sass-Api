import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { user } from '../header/user.modelo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

@Output() personaCreada = new EventEmitter<user>();

 
  nameInput:string;
  lastInput:string;
  constructor() { }

  ngOnInit() {
  }

  onModelPersona(){
    let persona = new user(this.nameInput, this.lastInput);
    this.personaCreada.emit(persona);
    this.nameInput = "";
    this.lastInput = "";
  }

}
