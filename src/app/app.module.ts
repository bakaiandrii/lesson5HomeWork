import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { UserComponent } from './components/user/user.component';
import { SelectedPostComponent } from './components/selected-post/selected-post.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    UserComponent,
    SelectedPostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: SearchUsersComponent},
      {path: 'posts', component: SelectedPostComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
