import { Component, OnInit, OnDestroy } from '@angular/core';

import { SubscriptionLike  } from "rxjs";

import { IUser } from '../service/userInterface'

import { UserService } from '../service/user.service';
import { NotifyService } from '../service/notification/notify.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: IUser[];
  subscription:SubscriptionLike

  currentPage:number = 1;
  itemsPerPage:number = 7;
  pageSize: number;
  collectionSize: number;

  constructor(private userService: UserService, private notify: NotifyService) { }

  ngOnInit() {
    this.getUsers()
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
    this.subscription = null;
  }

  addUserList(obj: {text: string}): void{
    const date = new Date().toString()
    this.users.push({
      name: obj.text,
      email: obj.text + "@mail.ru",
      password: 12345,
      created_at: date,
      update_at: date,
      id: this.users.length + 1
    })

    const numberOfList: number = this.users.length / 5;
    if (Math.floor(numberOfList) === numberOfList){
      this.onPageChange(numberOfList)
      this.currentPage = numberOfList
      return
    }
    this.currentPage = Math.floor(numberOfList+1)
    this.onPageChange(Math.floor(numberOfList+1))
  }

  getUsers(){
     this.subscription = this.userService.getUsers().subscribe(users => {
      this.users = users
      this.collectionSize = this.users.length
    })
  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
    this.collectionSize = this.users.length
  }

}
