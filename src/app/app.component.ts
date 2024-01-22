import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostCardComponent } from './post-card/post-card.component';

import axios from 'axios';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import PostModel from '../models/PostModel';
import CreatePostModel from '../models/CreatePostModel';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PostCardComponent, FormsModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

}
