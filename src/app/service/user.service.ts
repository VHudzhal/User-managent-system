import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { IUser } from './userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:3001/users'

  users: Array<IUser> = []

  constructor(private http: HttpClient) { }


  addUser(text){
    const date = new Date().toString()
    this.users.push({
      name: text,
      email: text+"@gmail.com",
      password: text,
      created_at: date,
      update_at: date,
      id: this.users.length + 1
    })
    return this.users;
  }

  getUsers(){
    return this.http.get("http://localhost:3001/users").pipe(map(data => {
      let userList = data['data'];
      return userList.map(user => {
        this.users.push(user)
        return user;
      });
    }))
  }
}
