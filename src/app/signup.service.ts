import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor( public http:HttpClient) { }

  Add(user)
  {
    return this.http.post("http://localhost:62839/api/User/Registration",user);
  }

}
