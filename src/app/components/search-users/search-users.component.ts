import {Component} from '@angular/core';
import {User} from '../../models/User';
import {NgForm} from '@angular/forms';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent {

  user: User = {};
  users: User[];

  constructor(private userService: UserService) {

  }


  searchUSer(myForm: NgForm): void {
    console.log(myForm.controls.id.value);
    console.log(myForm.controls.email.value);
    this.userService.getUser().subscribe(values => {
      const filterUsers = this.userService.filterUser(values, this.user);
      this.users = filterUsers;
    });
  }
}
