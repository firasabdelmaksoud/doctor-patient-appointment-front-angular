import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ User}from'./user';




@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }


  public loginUserFromRemote(user:User):Observable<any>
  
  {
    
    return this._http.post<any>("http://localhost:8080/login",user)
     
  }
  
  public registerUserFromRemote(user:User):Observable<any>
  
  {
    
    return this._http.post<any>("http://localhost:8080/registeruser",user)
     
  }


}
