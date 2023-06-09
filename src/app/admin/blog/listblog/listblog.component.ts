import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-listblog',
  templateUrl: './listblog.component.html',
  styleUrls: ['./listblog.component.css']
})
export class ListblogComponent {

  blogs: any[] | undefined;
  blog: any = [];
  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe(
      (response) => {
        this.blogs = response;
      },
      (error) => {
        console.log(error);
      }
    ); 

  }

  navigateToDetail(blogId: string) {
    this.router.navigate(['/blogs/' + blogId]);
  }


  deleteBlog(id: number | string) {
    this.blogService.deleteBlog(id).subscribe(() => {
      this.getBlogs();
      confirm('Bạn có chắc muốn xóa không');
    });
  } 


}
