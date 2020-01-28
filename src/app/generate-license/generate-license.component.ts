import { Component, OnInit } from '@angular/core';
import { RTOService } from '../rto.service';

@Component({
  selector: 'app-generate-license',
  templateUrl: './generate-license.component.html',
  styleUrls: ['./generate-license.component.css']
})
export class GenerateLicenseComponent implements OnInit {
uid:any
lid:any
aid:any
  constructor(public service:RTOService) { }

  ngOnInit() {
    this.uid=sessionStorage.getItem("uid")
    this.lid=sessionStorage.getItem("Lid")
    this.aid=sessionStorage.getItem("Aid")
    console.log(this.uid)
    console.log(this.aid)
    console.log(this.lid)

  }

  GenerateLicense(myForm)
  {
    let data=myForm.form.value;
    console.log(data);
   this.service.GenerateLicense(data).subscribe(()=>
   {
     console.log(data);
     window.alert("License Generated")

   })
    
  }
}
