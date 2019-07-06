import { Component, OnInit } from '@angular/core';
import { ConexionService } from './../../services/conexion.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items: any;

  editItem:any = {
    name: ''
  }

  constructor(private conexion: ConexionService) {
    this.conexion.listarItem().subscribe(item => {
      this.items = item;
      console.log(this.items);
    });
  }

  ngOnInit() {
  }

  delete(item){
    this.conexion.deleteItem(item);
  }

  edit(item){
    console.log('estoy en el metodo edit')
this.editItem = item;

  }

  agregarItemEditado(){
    this.conexion.editItem(this.editItem);
  }

}
