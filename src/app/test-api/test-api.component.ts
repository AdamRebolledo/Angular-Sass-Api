import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Cars } from '../model/cars.model';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})
export class TestApiComponent implements OnInit {


  cars: Array<Cars> ;

  constructor(private userService: UserService ) {
  this.cars = new Array<Cars>();

     userService.getUsers().subscribe(carros=>{
        this.cars = carros;
     })

      
  }

  ngOnInit() {
  }




}
