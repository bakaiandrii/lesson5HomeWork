import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  filterUser(users: User[], user): User[]{
    return users.filter(value => value.id === +user.id || value.email.toLocaleLowerCase().includes(user.email.toLowerCase()));
  }

}
