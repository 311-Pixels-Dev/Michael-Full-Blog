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
  @Input({required: true}) postObject!: PostModel;
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter();

  authorName: string = "anonimo";

  apiService: ApiService;
  editMode: boolean = false;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  ngOnInit(): void {
    this.authorName = this.postObject.author?.name || "anonimo";
  }

  async deletePost() {
    await this.apiService.deletePost(this.postObject.id);
    this.deleteEvent.emit();
  }

  setEditMode() {
    this.editMode = true;
  }

  async editPost() {
    await this.apiService.editPost(this.postObject);
    this.editMode = false;
    this.deleteEvent.emit();
  }
}
