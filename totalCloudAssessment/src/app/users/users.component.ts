import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { IUsers } from './users';
import { Observable, of } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:IUsers[] = [];
  filteredUser:  IUsers[];
  isFirstName = true;
  private _searchTerm: string;
  public isLoading: Observable<boolean> = of(false);

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredUser = this.filtereeUser(value);
  }
  constructor(private userService: UsersService, private route: Router) { }

  ngOnInit(): void {
    this.isLoading = of(true);
    this.userService.getAllUsers().subscribe((data) =>{
      this.isLoading = of(false);
      this.users = data;
    }
  
  );

}
filtereeUser(searchString: string) {
  return this.users.filter(userIn => 
    userIn.data.first_name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    
}

key:string = 'id';
reverse:boolean = false;
sort(key) {
  this.key = key;
  this.reverse = !this.reverse;
}
}
