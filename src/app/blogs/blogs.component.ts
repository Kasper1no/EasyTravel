import { Component } from '@angular/core';
import { Blog } from '../blog';
import { BLOGS } from '../blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs = BLOGS;
}
