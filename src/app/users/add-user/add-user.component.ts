import { Component, OnInit,  Output, EventEmitter} from '@angular/core';
import { NotifyService } from 'src/app/service/notification/notify.service';
import { UserService } from 'src/app/service/user.service';
import { IUser } from 'src/app/service/userInterface';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output() addUserList = new EventEmitter<IUser[]>()

  constructor(private notify: NotifyService, private userService: UserService) { }

  ngOnInit() {
  }

  addUser(text){
    let users = this.userService.addUser(text)
    this.addUserList.emit(users)
    this.notify.showSuccess("Users " + text + " add", "")
  }

}
