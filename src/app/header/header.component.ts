import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  animales:Array<any> = [
    {
      tipo:'Perro', name:'Aiko', edad:1.5
    },
    {
      tipo:'Perro', name:'Mei', edad:1.5
    },
    {
      tipo:'Gato', name:'Polla', edad:10
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
