import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges(); //'items es la coleccion de la base de datos firebase'
  }
//980bf588d2d242639282ccfa17da1f09  app client
//4e5255c3d0fe49dfa326d7b49be606ce secret 
  ngOnInit() {
  }

}
