import {Component} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../models/User';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson5HomeWork';
  user: User = {};
  users: User[];

  constructor(private userService: UserService) {

  }


  search(): void {
    this.userService.getUser().subscribe(values => {
      const filterUsers = this.userService.filterUser(values, this.user);
      this.users = filterUsers;
      console.log(this.users);
    });

  }


  xxx(myForm: NgForm) {
    console.log(myForm);

  }

}
