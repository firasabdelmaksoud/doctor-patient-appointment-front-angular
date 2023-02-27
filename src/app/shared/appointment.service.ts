import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../interfaces/Appointment';
import { Patient } from '../interfaces/Patient';
import { Doctor } from '../interfaces/Doctor';
import { AppointmentStatus } from '../interfaces/AppointmentStatus';

export class appointment {
  appointmentId?: number; 
  patient?: Patient ;
  doctor?:Doctor ;
  notes?:string  ;
  status?:AppointmentStatus ;
  date?:Date  ;
  time?:Date ;
}
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  endpoint = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getAppointments(): Observable<Appointment> {
    return this.httpClient
      .get<Appointment>(this.endpoint + '/retrieve-all-Appointment')
      .pipe(retry(1), catchError(this.processError));
  }
  getSingleAppointment(id: any): Observable<Appointment> {
    return this.httpClient
      .get<Appointment>(this.endpoint + '/retrieve-Appointment/' + id)
      .pipe(retry(1), catchError(this.processError));
  }
  addAppointment(data: any): Observable<Appointment> {
    return this.httpClient
      .post<Appointment>(
        this.endpoint + '/add-Appointment',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }
  updateAppointment(id: any, data: any): Observable<Appointment> {
    return this.httpClient
      .put<Appointment>(
        this.endpoint + '/modify-Appointment/', JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }
  deleteAppointment(id: any) {
    return this.httpClient
      .delete<Appointment>(this.endpoint + '/remove-Appointment/' +id, this.httpHeader)
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
  }
}
