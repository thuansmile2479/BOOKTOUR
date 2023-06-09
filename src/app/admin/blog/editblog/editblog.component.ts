import { Component } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent {

  blog!: Blog
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

  

  onHandleEdit(){
    if(this.blogForm.valid){
      const blog : Blog = {
        _id: this.blog._id,
        name: this.blogForm.value.name || "",
        img: this.blogForm.value.img || "",
        dates: this.blogForm.value.dates || "", 
        content: this.blogForm.value.content || "",
        contentmain: this.blogForm.value.contentmain || "",
      }
      this.blogService.updateBlog(blog).subscribe(data => {
        alert("Update blog successfully.")
        this.Router.navigateByUrl('/admin/blog')
      })
    }
    
  }
}
