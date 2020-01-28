import { Component, OnInit } from '@angular/core';
import { LicenseService } from '../license.service';

@Component({
  selector: 'app-my-license',
  templateUrl: './my-license.component.html',
  styleUrls: ['./my-license.component.css']
})
export class MyLicenseComponent implements OnInit {
  name:string;
  User:string;
  d;
  newdata:string;
  email:string;
  gon:string;
  vtill:string;
  license:string;
  ano:string;

  constructor(public service:LicenseService) { }

  ngOnInit() {
    this.User=sessionStorage.getItem("UserId");
    console.log(this.User);
    this.service.Mylicense(this.User).subscribe((data)=>
     {
       
      this.d=data;
      console.log(this.d['Data'])
      console.log("check1");
      this.name=this.d.Data.Name;
      this.email=this.d.Data.EmailId;
      this.license= this.d.Data.ApplicantDetails[0].LicenseId;
      this.gon = this.d.Data.GenerateLicenses[0].GeneratedOn;
      this.vtill= this.d.Data.GenerateLicenses[0].ValidTill;
     })

    
    //  console.log(this.gon);
    //  console.log(this.vtill);
    //  console.log(this.email);
    //  console.log(this.name);
    //  console.log(this.license);
     //console.log(this.d.Data.ApplicantDetails[0]);
  }

}
