import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { NavComponent } from './nav/nav/nav.component';
import { PostsComponent } from './posts/posts/posts.component';
import { MainComponent } from './main/main/main.component';
import { ModalComponent } from './modal/modal/modal.component';
import { UsersComponent } from './users/users/users.component';
import { UserComponent } from './user/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostsComponent,
    MainComponent,
    ModalComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
