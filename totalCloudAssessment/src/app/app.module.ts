import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users/users.service';
import { SingleUserComponent } from './single-user/single-user.component';
import { ArraySortPipe } from './sort-by-pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SingleUserComponent,
    ArraySortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
