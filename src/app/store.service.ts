import { Injectable } from '@angular/core';
import UserModel from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  saveUser(user: UserModel) {
    localStorage.setItem('userid', user.id);
    localStorage.setItem('username', user.username);
  }

  isLogged(): boolean {
    return localStorage.getItem('userid') !== null;
  }

  getUsername(): string {
    let username: string = localStorage.getItem('username') || "anonimo";
    return username;
  }
  
  getUserId(): string | null {
    let id = localStorage.getItem('userid');

    return id;
  }

  removeUser() {
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
  }

  constructor() { }
}
