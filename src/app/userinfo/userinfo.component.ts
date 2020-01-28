import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../applicant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  flag:boolean;
  users:any;
  constructor(public service:ApplicantService,public router:Router) {
    this.getinfo()
   }

  ngOnInit() {
  }
getinfo()
{
  this.service.getinfo().subscribe((list)=>{

    console.log(list['Data']);
    this.users=list['Data'];
  
    console.log(list[0])
  })

 

}
CallAppointMent(Userid)
{
  this.flag=true;
  this.router.navigate(['/AssignAppointment']);
console.log(Userid);
sessionStorage.setItem("uid",Userid);
}
}
