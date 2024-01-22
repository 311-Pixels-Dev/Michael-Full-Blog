import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  readonly storeService: StoreService;

  // username: string = ''

  constructor(storeService: StoreService) {
    this.storeService = storeService;
  }

  getUsername() {
    return this.storeService.getUsername();
  }

  isLogged() {
    return this.storeService.isLogged();
  }

  logout() {
    this.storeService.removeUser();
  }



}

