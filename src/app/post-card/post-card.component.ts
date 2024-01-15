import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'post-card',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit {
  @Input() postObject: any;
  
  title: string = "";
  content: string = "";
  authorName: string = "";
  date: string = "";

  ngOnInit(): void {
    this.title = this.postObject.title;
    this.content = this.postObject.content;
    this.getUserById(this.postObject.author);
    this.date = this.postObject.date;
  }

  async getUserById(id: string) {
    let response = await axios.get("http://localhost:8090/api/collections/users/records/" + id);
    let name = response.data.name;
    this.authorName = name;
  }
}
