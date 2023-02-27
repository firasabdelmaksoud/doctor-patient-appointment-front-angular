import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gender } from '../interfaces/Gender';
import { User } from '../interfaces/User';
import { City } from '../interfaces/City';
export class patient {
  patientId?: number;
  user?: User;
  firstname?: string;
  lastname?: string;
  gender?: Gender;
  phone?: number;
  address?: string;
  dateOfBirth?: Date;
  city?: City;
}
@Injectable({
  providedIn: 'root',
})
export class patientService {
  endpoint = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getpatients(): Observable<patient> {
    return this.httpClient
      .get<patient>(this.endpoint + '/retrieve-all-Patient' )
      .pipe(retry(1), catchError(this.processError));
  }
  getSinglepatient(id: any): Observable<patient> {
    return this.httpClient
      .get<patient>(this.endpoint + '/retrieve-Patient/' + id)
      .pipe(retry(1), catchError(this.processError));
  }
  addpatient(data: any): Observable<patient> {
    return this.httpClient
      .post<patient>(
        this.endpoint + '/add-Patient',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }
  updatepatient(id: any, data: any): Observable<patient> {
    return this.httpClient
      .put<patient>(
        this.endpoint + '/modify-Patient/' , JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }
  deletepatient(id: any) {
    return this.httpClient
      .delete<patient>(this.endpoint + '/remove-Patient/' +id, this.httpHeader)
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