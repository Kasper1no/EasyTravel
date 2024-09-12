import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog';
import { BLOGS } from '../blogs';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blog: Blog = {
    id: 0,
    title: '',
    image1: '',
    text1: '',
    image2: '',
    description: '',
    text2: ''
  };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(): void {
    let id = +this.route.snapshot.paramMap.get('id')!;
    this.blog = BLOGS.find(b => b.id === id) || this.blog;
  }


}
