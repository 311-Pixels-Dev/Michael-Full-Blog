import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import UserModel from '../../models/UserModel';
import { StoreService } from '../store.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  readonly apiService: ApiService;
  readonly storeService: StoreService;
  readonly router: Router;

  username: string = '';
  password: string = '';

  constructor(apiService: ApiService, storeService: StoreService, router: Router) {
    this.apiService = apiService;
    this.storeService = storeService;
    this.router = router;
  }

  async login() {
    let user: UserModel = await this.apiService.loginUser(this.username, this.password);
    console.log(user);
    this.storeService.saveUser(user);
    this.router.navigate(['posts'])
  }

}
