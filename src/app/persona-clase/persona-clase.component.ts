import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-persona-clase',
  templateUrl: './persona-clase.component.html',
  styleUrls: ['./persona-clase.component.scss']
})
export class PersonaClaseComponent implements OnInit {
@Input() persona:string; 
@Input() i:string;
  constructor() { }

  ngOnInit() {
  }

}
