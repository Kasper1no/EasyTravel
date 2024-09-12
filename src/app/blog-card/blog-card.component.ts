import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BLOGS } from '../blogs';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input() blogId: number | undefined = 0;

  blog: Blog = {
    id: 0,
    title: '',
    image1: '',
    text1: '',
    image2: '',
    description: '',
    text2: ''
  };
  
  ngOnInit(): void {
    this.blog = BLOGS.find(b => b.id === this.blogId)!;
  }
}
