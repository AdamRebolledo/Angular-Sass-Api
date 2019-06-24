import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'firebase';

@Component({
  selector: 'app-api-users',
  templateUrl: './api-users.component.html',
  styleUrls: ['./api-users.component.scss']
})
export class ApiUsersComponent implements OnInit {
  title = 'Consumo de api rest';
  user:any[];

  constructor(protected userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      (data:any) => { // Success
        this.user = data.user;
      }
    );
  }
}