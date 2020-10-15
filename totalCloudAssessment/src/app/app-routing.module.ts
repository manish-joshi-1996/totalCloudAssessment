import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { SingleUserComponent } from './single-user/single-user.component';

const routes: Routes = [
  {path:"", redirectTo:"users", pathMatch:"full"},
  {path:"users", component: UsersComponent},
  {path:"user/:id", component: SingleUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
