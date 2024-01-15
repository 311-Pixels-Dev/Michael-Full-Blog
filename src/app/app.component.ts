import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostCardComponent } from './post-card/post-card.component';

import axios from 'axios';
import { FormsModule } from '@angular/forms';

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


  title = 'blog';

  posts: any = [];

  newPostTitle: string = "";
  newPostContent: string = "";

  async publishPost() {
    await axios.post("http://localhost:8090/api/collections/posts/records", {
      title: this.newPostTitle,
      content: this.newPostContent
    })
    this.getPosts();
    this.newPostContent = "";
    this.newPostTitle = "";
  }

  async getPosts() {
    let response = await axios.get("http://localhost:8090/api/collections/posts/records");
    this.posts = response.data.items;
  }

}
