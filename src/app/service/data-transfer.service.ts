import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  state = new BehaviorSubject<User>({});

  constructor() {
  }

  changeState(value): void{
    this.state.next(value);
  }

  getState(): User{
    return this.state.getValue();
  }
}
