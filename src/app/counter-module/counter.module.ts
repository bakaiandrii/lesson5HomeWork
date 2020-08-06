import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CounterRoutingModule} from './counter-routing.module';
import {CounterComponent} from './component/counter/counter.component';
import {UserVoteComponent} from './component/user-vote/user-vote.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from '../service/user.service';


@NgModule({
  declarations: [CounterComponent, UserVoteComponent],
  exports: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],

})
export class CounterModule {
}
