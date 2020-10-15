import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';
import { IUsers } from '../users/users';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  user:IUsers[]=[];
  constructor(private route: ActivatedRoute, private userService:UsersService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.userService.getUser(id).subscribe(u =>{
      console.log(u);
      this.user = u;
    })
  }



}
