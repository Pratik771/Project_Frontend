import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../applicant.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username:string;
  password:string;
  msg:string;

  constructor( public service:ApplicantService,public router:Router,private translateService: TranslateService) { 
    this.router=router;
    translateService.addLangs(["en", "ge", "hi"]);
    translateService.setDefaultLang("en");
  }

  ngOnInit() {
    
  }
  switchLanguage(language: string) {
    this.translateService.use(language);
  }


  login(userObject)
  {
  
    this.service.login(this.username,this.password).subscribe((res)=>{
      var data = res.json();
      console.log(this.username);
      console.log(this.password);
      console.log(data);
      console.log(data.Data.RoleId)
    
     sessionStorage['UserName']=data.Data.Name;
     sessionStorage.setItem("Uname",data.Data.Name);
     sessionStorage.getItem("Uname")

     this.msg = sessionStorage['UserName'];
     sessionStorage['UserEmail']=data.Data.EmailId;
     sessionStorage['UserId']=data.Data.UserId;

      console.log(sessionStorage['UserName']);
      console.log(sessionStorage['UserEmail']);
      console.log(" Details "+ sessionStorage['UserId']);
      sessionStorage.setItem("UserId",data.Data.UserId);
      console.log(sessionStorage['UserId']);
      if(data.Data.RoleId==1)
      {
        this.router.navigate(['/Dashboard']);
      }
      if(data.Data.RoleId==2)
      {
        this.router.navigate(['/UserDash']);
      }
    
    
      
    });
  }
}