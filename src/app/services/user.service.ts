import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from '../model/cars.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(protected http: HttpClient) { }


  getUsers(): Observable<Array<Cars>>{


    return this.http.get('http://localhost:8080/testApi/jsonExample.json').pipe(
      map((carsJson:any) =>{

      let cars = new Array<Cars>();

      carsJson.cars.Nissan.forEach((value) => {
        let carro3 = new Cars();
        carro3.model = value.model
        carro3.marc = "Nissan"
        carro3.doors = value.doors
        carro3.image = value.img
        cars.push(carro3);
      });
      carsJson.cars.Ford.forEach((value) => {
        let carroFord = new Cars();
        carroFord.model = value.model
        carroFord.marc = "Ford"
        carroFord.doors = value.doors
        carroFord.image = value.img
        cars.push(carroFord);
      });
      return cars;
    }));


  }
}
