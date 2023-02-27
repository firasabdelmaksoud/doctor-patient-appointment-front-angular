import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserType } from '../interfaces/UserType';
export class User {
  userId?: string; 
  email?: string ;
  password?:string ;
  type?: UserType ;
  confirmed?:boolean  ;
  referralId?:number ;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getUsers(): Observable<User> {
    return this.httpClient
      .get<User>(this.endpoint + '/retrieve-all-User')
      .pipe(retry(1), catchError(this.processError));
  }
  getSingleUser(id: any): Observable<User> {
    return this.httpClient
      .get<User>(this.endpoint + '/retrieve-User/' + id)
      .pipe(retry(1), catchError(this.processError));
  }
  addUser(data: any): Observable<User> {
    return this.httpClient
      .post<User>(
        this.endpoint + '/add-User',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }
  updateUser(id: any, data: any): Observable<User> {
    return this.httpClient
      .put<User>(
        this.endpoint + '/modify-User/', JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }
  deleteUser(id: any) {
    return this.httpClient
      .delete<User>(this.endpoint + '/remove-User/' +id, this.httpHeader)
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

