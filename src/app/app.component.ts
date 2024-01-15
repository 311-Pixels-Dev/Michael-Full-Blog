import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostCardComponent } from './post-card/post-card.component';

import axios from 'axios';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import PostModel from '../models/PostModel';
import CreatePostModel from '../models/CreatePostModel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PostCardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.getPosts();
  }

  apiService: ApiService;

  title = 'blog';

  posts: any = [];

  newPostTitle: string = "";
  newPostContent: string = "";

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  async publishPost() {
    let post: CreatePostModel = {
      title: this.newPostTitle,
      content: this.newPostContent,
      date: "",
      author: undefined
    }
    await this.apiService.publishPost(post);
    this.getPosts();
    this.newPostContent = "";
    this.newPostTitle = "";
  }

  async getPosts() {
    this.posts = await this.apiService.getPosts();
  }

}
