import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RTOService {

  constructor(public http:HttpClient) { }

  getTestList()
  {
    return this.http.get("http://localhost:62839/api/Test/Get1")
  }
  SetResult(User)
  {
  
    return this.http.post("http://localhost:62839/api/RTO/Post1",User)
  }

  GenerateLicense(User)
  {
  
    return this.http.post(" http://localhost:62839/api/RTO/Post2",User)
  }
 

  CallAppointMent(User)
  {
   // console.log()
   // var U={"UserId":User};
    return this.http.post("http://localhost:62839/api/RTO/Post3",User)

  }


  getPasswordHistory()
  {
    return this.http.get("http://localhost:62839/api/PasswordHistory")
  }


}
