import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from '../interfaces/Doctor';
import { User } from '../interfaces/User';
import { City } from '../interfaces/City';
import { DoctorSpeciality } from '../interfaces/DoctorSpeciality';
export class doctor {
  doctorId?: string; 
  user?: User ;
  firstname?:string ;
  lastname?:string  ;
  phone?:number ;
  address?:string ;
  city?:City ;
  speciality?:DoctorSpeciality ;
}
@Injectable({
  providedIn: 'root'
})

export class DoctorService {

  endpoint = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getDoctors(): Observable<Doctor> {
    return this.httpClient
      .get<Doctor>(this.endpoint + '/retrieve-all-Doctor')
      .pipe(retry(1), catchError(this.processError));
  }
  getSingleDoctor(id: any): Observable<Doctor> {
    return this.httpClient
      .get<Doctor>(this.endpoint + '/retrieve-Doctor/' + id)
      .pipe(retry(1), catchError(this.processError));
  }
  addDoctor(data: any): Observable<Doctor> {
    return this.httpClient
      .post<Doctor>(
        this.endpoint + '/add-Doctor',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }
  updateDoctor(id: any, data: any): Observable<Doctor> {
    return this.httpClient
      .put<Doctor>(
        this.endpoint + '/modify-Doctor/', JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }
  deleteDoctor(id: any) {
    return this.httpClient
      .delete<Doctor>(this.endpoint + '/remove-Doctor/' +id, this.httpHeader)
      .pipe(retry(1), catchError(this.processError));
  }
  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => {
      message;
    });
  }}
