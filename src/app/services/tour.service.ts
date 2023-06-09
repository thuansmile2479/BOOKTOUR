import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError, of } from 'rxjs';
import { Tour } from '../interfaces/tour';

import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class TourService {

  private apiUrl = 'http://localhost:8080/api/tours';
 

  constructor(private http: HttpClient) {}
  getTours(): Observable<Tour[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      switchMap((response) => {
        console.log(response);

        return of(response.docs);
      })
    );
  }
  
  getTour(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
  getTourById(id:number | string): Observable<Tour> {
    return this.http.get<Tour>(`${this.apiUrl}/${id}`);
  }

  createTour(tour: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, tour);
  }

  updateTour( tour: any): Observable<any> {
    const url = `http://localhost:8080/api/tours/${tour._id}`;
    return this.http.patch<any>(url, tour);
  }

  deleteTour(id: number | string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
