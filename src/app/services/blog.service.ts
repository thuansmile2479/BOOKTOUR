import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError, of } from 'rxjs';
import { Blog } from '../interfaces/blog';

import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class BlogService {


  private apiUrl = 'http://localhost:8080/api/blogs';
 

  constructor(private http: HttpClient) {}
  getBlogs(): Observable<Blog[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      switchMap((response) => {
        console.log(response);

        return of(response.docs);
      })
    );
  }
  
  getBlog(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
  getBlogById(id:number | string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`);
  }

  createBlog(blog: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, blog);
  }

  updateBlog( blog: any): Observable<any> {
    const url = `http://localhost:8080/api/blogs/${blog._id}`;
    return this.http.patch<any>(url, blog);
  }

  deleteBlog(id: number | string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
