import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostCardComponent } from '../post-card/post-card.component';
import CreatePostModel from '../../models/CreatePostModel';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [PostCardComponent, FormsModule, CommonModule],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent implements OnInit {
  
  ngOnInit(): void {
    this.getPosts();
  }

  apiService: ApiService;
  storeService: StoreService;

  title = 'blog';

  posts: any = [];

  newPostTitle: string = "";
  newPostContent: string = "";

  constructor(apiService: ApiService, storeService: StoreService) {
    this.apiService = apiService;
    this.storeService = storeService;
  }

  isLogged() {
    return this.storeService.isLogged();
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
