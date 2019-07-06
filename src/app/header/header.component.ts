import { Component, OnInit, Input } from '@angular/core';
import{ user} from './user.modelo';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() 

  animales: Array<any> = [
    {
      tipo: 'Perro', name: 'Aiko', edad: 1.5
    },
    {
      tipo: 'Perro', name: 'Mei', edad: 1.5
    },
    {
      tipo: 'Gato', name: 'Polla', edad: 10
    }
  ]

  agregarPersona: boolean = false;
  agregar = "no se ha agregado ninguna persona";
  tituloPersona = "";
  declaracionIf: boolean = false;
  ejemplo: string = "this is a example else"
  txtIf: string = "this is a example of if"

personas:user[] = [new user("adam","rebolledo"), new user("sara","obando")]
 equip:any;
  constructor(private _servicio:EquipoService) {
    setTimeout(() => { this.agregarPersona = true }, 3000);
    this.equip = _servicio.obtenerEquipo();
  }


  ngOnInit() {
  }



  onAgregarPersona() {
    this.agregar = "persona agregada";
  }

  onModificarPersona(event: Event) {
    this.tituloPersona = (<HTMLInputElement>event.target).value;
  }
  onIf() {
    this.declaracionIf = !this.declaracionIf;
  }


  onEventComponent(persona:user){
this.personas.push(persona);
  }


  indi(indice:number){
  alert(indice);
  }
}
