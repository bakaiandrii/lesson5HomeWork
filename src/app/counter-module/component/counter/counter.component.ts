import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {User} from '../../../models/User';



@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  agreed = 0;
  disagreed = 0;
  voters: User[];

  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(user => this.voters = user);
  }

  ngOnInit(): void {
  }


  onVoted(agreed: any) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
