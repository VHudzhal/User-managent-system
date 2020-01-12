import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { RouterModule } from '@angular/router';

import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    LoginModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    RouterModule
  ]
})
export class CoreModule { }
