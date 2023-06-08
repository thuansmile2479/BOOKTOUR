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
    console.log("heeeee");

  }

  navigateToDetail(blogId: string) {
    this.router.navigate(['/blogs/' + blogId]);
  }



  deleteBlog(id: number | string) {
    const confirmation = confirm('Bạn có chắc chắn muốn xóa sản phẩm này?');
    if (confirmation) {
      this.blogService.deleteBlog(id).subscribe(() => {
        const index = this.blog.findIndex((item: any) => item._id === id);
        if (index !== -1) {
          this.blog.splice(index, 1);
          alert('Xóa sản phẩm thành công!');
        this.router.navigateByUrl('/admin/blog')

        }
      });
    }
  }


}
