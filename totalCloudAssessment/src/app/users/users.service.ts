import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient) { }
  public getAllUsers(): Observable<IUsers[]>{
    return this.http.get<IUsers[]>('https://reqres.in/api/users?delay=3');
  }

  public getUser(id: number): Observable<IUsers[]> {
    return this.http.get<IUsers[]>("https://reqres.in/api/users/" +id);
  }
}
