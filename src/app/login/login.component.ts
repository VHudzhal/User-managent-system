import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3001').subscribe(data => {
      console.log(data)
    })

  }

  login(){
    this.router.navigateByUrl('/dashboard')
  }

}
