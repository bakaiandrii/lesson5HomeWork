import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../models/User';
import {DataTransferService} from '../../service/data-transfer.service';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {
  pipeTest = 'pipes';

  users: User[];
  constructor(private userService: UserService,
              private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => this.users = user);
    console.log(this.dataTransferService.getState());
  }

}
