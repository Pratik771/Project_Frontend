import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Http,Headers,RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {


  constructor(public http:Http, public httpc:HttpClient) {
    this.http=http;
   }



   getinfo()
   {
     return this.httpc.get("http://localhost:62839/api/Applicant/Get1");
   }

  login(username,password){
    
    let credentials = {
      "EmailId":username,
      "Password":password
    };
    //let header = new Headers({"Content-Type":"application/json"});
    //let header = new HttpHeaders({"Content-Type":"application/json"});
    // let reqOptions = new RequestOptions({
    //   headers:header
    // });
    let header = new Headers({"Content-Type":"application/json"});
    let reqOptions = new RequestOptions({
      headers:header
    });

    return this.http.post("http://localhost:62839/api/User/Login",credentials,reqOptions);
   }



   OTPGenerate(email)
   {
     alert("inside OTPGenerate ");
     var RUser={
       "EmailId":email,
       
      };
 
     return this.http.post(`http://localhost:62839/api/User/IsExist`, RUser);
   }
   OTPValidate(otp,email)
   {
     
     alert("inside validateOTP");
     var RUser={
       "EmailId":email,
       "OTP":otp
      };
 
    
      console.log(RUser);
     
     return this.http.post(`http://localhost:62839/api/User/OTP`, RUser,);
   }
 
   Passwordreset(password,email)
   {
 
     alert("inside validateOTP");
     var RUser={
       "EmailId":email,
       "Password":password,
       
      };
 
       console.log(RUser);
      
     return this.http.put(`http://localhost:62839/api/User/UpdatePassword`, RUser);
   }


   
}
