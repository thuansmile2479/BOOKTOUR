import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError, of } from 'rxjs';
import { Lienhe } from '../interfaces/lienhe';

import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LienheService {

  private apiUrl = 'http://localhost:8080/api/lienhes';
 

  constructor(private http: HttpClient) {}
  getLienhes(): Observable<Lienhe[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      switchMap((response) => {
        console.log(response);

        return of(response.docs);
      })
    );
  }
  
  getLienhe(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
  getLienheById(id:number | string): Observable<Lienhe> {
    return this.http.get<Lienhe>(`${this.apiUrl}/${id}`);
  }

  createLienhe(lienhe: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, lienhe);
  }

  updateLienhe( lienhe: any): Observable<any> {
    const url = `http://localhost:8080/api/lienhes/${lienhe._id}`;
    return this.http.patch<any>(url, lienhe);
  }

  deleteLienhe(id: number | string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
