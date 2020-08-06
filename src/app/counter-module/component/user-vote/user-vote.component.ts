import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {User} from '../../../models/User';

@Component({
  selector: 'app-user-vote',
  templateUrl: './user-vote.component.html',
  styleUrls: ['./user-vote.component.css']
})
export class UserVoteComponent implements OnInit {

  @Input()  user: User;

  @Output() voted = new EventEmitter<boolean>();

  didVote = false;

  constructor() { }

  vote(agreed: boolean): void {
    this.voted.emit(agreed);
    this.didVote = true;
  }

  ngOnInit(): void {
  }

}
