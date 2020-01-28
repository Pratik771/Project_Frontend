import { Component, OnInit } from '@angular/core';
import { LicenseService } from '../license.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public service:LicenseService) { }
  User:any;
  d:any;
  ngOnInit() {
    //this.User=sessionStorage.getItem("UserId");
    this.User=sessionStorage.getItem("UserId");
    console.log(this.User);
    this.service.UserProfile(this.User).subscribe((data)=>
     {
      this.d=data['Data'];
       console.log(data['Data']);
      console.log(this.d.MySchedule);

     })
  }
  


  
}
