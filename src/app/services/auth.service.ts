import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private htpp: HttpClient) { }
  private API = 'http://localhost:8080/api/signin';
  
   signIn(data: any): Observable<any> {
    return this.htpp.post<any>('http://localhost:8080/api/signin', data)
   }
   signUp(data: any): Observable<any> {
    return this.htpp.post<any>('http://localhost:8080/api/signup', data)
   }
  }