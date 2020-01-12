import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';

import { SortByPipe } from '../shared/sort-by.pipe';


@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent,
    AddUserComponent,
    SortByPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class UsersModule { }
