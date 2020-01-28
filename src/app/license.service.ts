import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(public http:HttpClient) { }

  AddMyinfo(user)
   {
    return this.http.post(`http://localhost:62839/api/Applicant`,user);
   }

   Mylicense(UserId)
   {
    return this.http.get("http://localhost:62839/api/MyLicense/"+UserId)
   }

   UserProfile(UserId)
   {
     return this.http.get("http://localhost:62839/api/Applicant/"+UserId)
   }
}
