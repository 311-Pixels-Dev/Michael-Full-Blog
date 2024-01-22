import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import UserModel from '../../models/UserModel';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  readonly apiService: ApiService;

  username: string = '';
  password: string = '';

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  async login() {
    let user: UserModel = await this.apiService.loginUser(this.username, this.password);
    console.log(user);
  }

}
