import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { IUser } from './userInterface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:3001/users'

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.baseUrl)
  }

  addUser(name:string){
    return this.http.post(this.baseUrl, {name: name}, {responseType: 'text'})
  }
}
