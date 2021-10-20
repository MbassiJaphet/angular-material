import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: BehaviorSubject<User[]>;
  private dataStore: {
    users: User[]
  }

  constructor(private http: HttpClient) { 
    this.dataStore = { users : [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  getById(id: number) {
    return this.dataStore.users.find(user => user.id == id);
  }

  loadAll() {
    const url = 'https://angular-material-api.azurewebsites.net/users';

    this.http.get<User[]>(url)
        .subscribe(data => {
          this.dataStore.users = data;
          this._users.next(Object.assign({}, this.dataStore).users);
        }, error => {
          console.log(`Failed to fetch users with error: ${error}`);
        })
  }
}
