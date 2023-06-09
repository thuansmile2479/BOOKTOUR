import { BlogService } from 'src/app/services/blog.service';
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Blog } from 'src/app/interfaces/blog';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent {
  blog: Blog = {

    name: '', 
    img: '', 
    dates: '', 
    content: '',
    contentmain: '',

  };
  blogs!: Blog[];

  constructor(private blogService: BlogService,
    private route: Router) {}

  createBlog(): void {
    this.blogService.createBlog(this.blog).subscribe(
      (response) => {
        alert('Thêm bài viết thành công!');
        this.route.navigateByUrl('/admin/blog')
      },
      (error) => {  
        console.log('An error occurred while creating blog:', error);
        // Xử lý lỗi nếu có
      }
    );
  }
}