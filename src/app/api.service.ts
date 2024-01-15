import { Injectable } from '@angular/core';
import axios from 'axios';
import PostModel from '../models/PostModel';
import UserModel from '../models/UserModel';
import CreatePostModel from '../models/CreatePostModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "http://localhost:8090";

  async getUserById(id: string): Promise<UserModel> {
    let response = await axios.get(this.baseUrl + "/api/collections/users/records/" + id);
    let user: UserModel = response.data;
    return user;
  }

  async getPosts(): Promise<Array<PostModel>> {
    let response = await axios.get(this.baseUrl + "/api/collections/posts/records?expand=author");
    let posts: Array<PostModel> = response.data.items.map((item: any) => {
      return {
        author: item.expand?.author || undefined,
        id: item.id,
        title: item.title,
        content: item.content,
        date: item.date
      }
    });
    return posts;
  }

  async publishPost(post: CreatePostModel): Promise<void>  {
    await axios.post(this.baseUrl + "/api/collections/posts/records", post);
  }

  async deletePost(postId: string): Promise<void> {
    await axios.delete(this.baseUrl + "/api/collections/posts/records/" + postId);
  }

  async editPost(post: PostModel): Promise<void> {
    await axios.patch(this.baseUrl + "/api/collections/posts/records/" + post.id, {
      title: post.title,
      content: post.content
    });
  }

  constructor() { }
}
