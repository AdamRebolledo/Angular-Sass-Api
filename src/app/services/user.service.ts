import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(protected http: HttpClient) { }
    getUsers() {
      console.log(this.http.get('http://localhost:8084/Backend-CRUD/v1/crudapi/getAllUsers'))
      return this.http.get('http://localhost:8084/Backend-CRUD/v1/crudapi/getAllUsers');
    }
  }