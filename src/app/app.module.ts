import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { UserComponent } from './components/user/user.component';
import { SelectedPostComponent } from './components/selected-post/selected-post.component';
import { PostComponent } from './components/post/post.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { PipeTestComponent } from './components/pipe-test/pipe-test.component';
import { MorePipe } from './components/pipe-test/more.pipe';
import {DataTransferService} from './service/data-transfer.service';
import {CounterModule} from './counter-module/counter.module';
import {CounterComponent} from './counter-module/component/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    UserComponent,
    SelectedPostComponent,
    PostComponent,
    ReactiveFormComponent,
    PipeTestComponent,
    MorePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: SearchUsersComponent},
      {path: 'posts', component: SelectedPostComponent},
      {path: 'reactive/form', component: ReactiveFormComponent},
      {path: 'pipes', component: PipeTestComponent},
      {path: 'counter', loadChildren: () => import('./counter-module/counter.module').then(m => m.CounterModule)}
      // {path: 'counter', component: CounterComponent}
    ]),
    ReactiveFormsModule,
  ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
