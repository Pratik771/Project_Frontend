import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApplicantService } from '../applicant.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  flag:Number = 0; 
  email:string = "";
  password:string = "";
  password2:string = "";
  otp:string = "";
  constructor(private service:ApplicantService,private router:Router) { }

  ngOnInit() {
  }
  generateOTP()
  {
    alert("In generate otp");
    let resultstate=this.service.OTPGenerate(this.email);
    resultstate.subscribe((data:any)=>{
      console.log(":)"+data.status);
      console.log(data);
      alert("Your OTP :"+data['_body']);
     // alert("Your OTP :"+data.Data);
      if(data.status==200)
      {
        this.flag=1;
      }
    });
  }
  validateOTP()
  {
    alert("In validate otp");
    let resultstate=this.service.OTPValidate(this.otp,this.email);
    
    resultstate.subscribe((data:any)=>{
      console.log(":)"+data.Status);
      if(data.status==200)
      {
       
        alert("valid OTP");
        this.flag=2;
      
      }

      
    }); 
    
  }

  resetPassword()
  {
    alert("In Reset otp");
    let resultstate=this.service.Passwordreset(this.password,this.email);
    resultstate.subscribe((data:any)=>{
      console.log(":)"+data.Data);
      if(data.status==200)
      {
        this.router.navigate(['/SignIn'])
 
      }
      
    }); 
    
    
  }
}