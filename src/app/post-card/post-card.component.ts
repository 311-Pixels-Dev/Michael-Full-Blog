import { CommonModule } from '@angular/common';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import axios from 'axios';
import PostModel from '../../models/PostModel';

@Component({
  selector: 'post-card',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit {
  @Input() postObject: PostModel | undefined;
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter();

  id: string = "";
  title: string = "";
  content: string = "";
  authorName: string = "";
  date: string = "";

  apiService: ApiService;
  editMode: boolean = false;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  ngOnInit(): void {
    this.authorName = this.postObject?.author?.name || "anonimo";
  }

  async getAuthorName(id: string) {
    let user = await this.apiService.getUserById(id);
    this.authorName = user.name;
  }

  async deletePost() {
    await axios.delete("http://localhost:8090/api/collections/posts/records/" + this.id);
    this.deleteEvent.emit();
  }

  setEditMode() {
    this.editMode = true;
  }

  async editPost() {
    await axios.patch("http://localhost:8090/api/collections/posts/records/" + this.id, {
      title: this.title,
      content: this.content
    })
    this.editMode = false;
    this.deleteEvent.emit();
  }
}
