import { Component, OnInit } from '@angular/core';
import { RTOService } from '../rto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
testers;
  constructor(public service:RTOService,public router:Router) { }

  ngOnInit() {
    this.service.getTestList().subscribe((list)=>{

      console.log(list['Data']);
      this.testers=list['Data'];
    
      console.log(list[0])
    })
  }

  Result(UserId)
  {
    console.log(UserId)
    this.router.navigate(["/Result"])
    sessionStorage.setItem("uid",UserId)
  }
  GenerateLicense(UserId,LicenseId,AdharcardNo)
  {
    console.log(UserId);
    console.log(LicenseId);
    console.log(AdharcardNo);
    sessionStorage.setItem("uid",UserId)
    sessionStorage.setItem("Lid",LicenseId)
    sessionStorage.setItem("Aid",AdharcardNo)
    this.router.navigate(["/GenerateLicense"])
  }

}
