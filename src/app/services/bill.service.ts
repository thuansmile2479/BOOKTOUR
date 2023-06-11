import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError, of } from 'rxjs';
import { Bill } from '../interfaces/bill';

import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private apiUrl = 'http://localhost:8080/api/bills';
 

  constructor(private http: HttpClient) {}
  getBills(): Observable<Bill[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      switchMap((response) => {
        console.log(response);

        return of(response.docs);
      })
    );
  }
  
  getBill(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
  getBillById(id:number | string): Observable<Bill> {
    return this.http.get<Bill>(`${this.apiUrl}/${id}`);
  }

  createBill(bill: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, bill);
  }

  updateBill( bill: any): Observable<any> {
    const url = `http://localhost:8080/api/bills/${bill._id}`;
    return this.http.patch<any>(url, bill);
  }

  deleteBill(id: number | string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
