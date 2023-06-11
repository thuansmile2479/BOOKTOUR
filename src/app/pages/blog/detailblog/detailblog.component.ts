import { Component } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-detailblog',
  templateUrl: './detailblog.component.html',
  styleUrls: ['./detailblog.component.css']
})
export class DetailblogComponent {
  blog!: Blog
  blogs: any[] | undefined;

  blogForm = this.formBuilder.group({
    name: [''],
    img: [''],
    dates: [''], 
    content: [''],
    contentmain: [''],
  })


  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private route: ActivatedRoute,
    private Router: Router
  ){
    this.route.paramMap.subscribe(param => {
      const id: any = param.get('id')
      this.blogService.getBlogById(id).subscribe(blog => {
        this.blog = blog,
        this.blogForm.patchValue({
          name: blog.name, 
          img: blog.img,
          dates: blog.dates, 
          content: blog.content,
          contentmain: blog.contentmain,
        })
      })
    })
  }

}
