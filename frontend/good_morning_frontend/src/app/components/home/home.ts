import { Component } from '@angular/core';
import { UserForm } from '../user-form/user-form';
import { UserList } from '../user-list/user-list';

@Component({
  selector: 'app-home',
  imports: [UserForm, UserList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isMoved = false;
  isFading = false;
  text = "Click anywhere...";
  showForm = false;
  showList = false;

  moveSun() {
    this.isMoved = true;
    this.isFading = true;
    this.showForm = true;
  }

  showUserList() {
    this.showList = true;
  }

}
