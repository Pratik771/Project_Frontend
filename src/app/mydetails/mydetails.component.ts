import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../applicant.service';
import { LicenseService } from '../license.service';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent implements OnInit {
User:any
  constructor(public service:LicenseService ) { }

  ngOnInit() {this.User=sessionStorage.getItem("UserId");
  }
 
  AddMyinfo(myForm)
  {
    let data=myForm.form.value;
    
   
    console.log(this.User);
    console.log(this.User);
    this.service.AddMyinfo(data).subscribe(()=>
    {
      window.alert("Profile updated Succuessfully")
      
   
    })

    
  }

}
