import { Injectable } from '@angular/core'; 
//import para trabajar con colecciones adjunto link  https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Item { name: string; id:string } //entre las llaves voy  poniendo los campos de la base de datos son los datos recibidos de form

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private angularFirestore: AngularFirestore) { 
    this.itemsCollection = angularFirestore.collection<Item>('items'); //'items' es la coleccion creada en la base de datos
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    
  }

  listarItem(){
    return this.items;
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteItem(item){
this.itemDoc = this.angularFirestore.doc<Item>(`items/${item.id}`);
this.itemDoc.delete();
  }

  editItem(item){
    this.itemDoc = this.angularFirestore.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
  }
}
