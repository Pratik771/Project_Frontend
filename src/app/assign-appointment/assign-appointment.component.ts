import { Component, OnInit } from '@angular/core';
import { RTOService } from '../rto.service';

@Component({
  selector: 'app-assign-appointment',
  templateUrl: './assign-appointment.component.html',
  styleUrls: ['./assign-appointment.component.css']
})
export class AssignAppointmentComponent implements OnInit {
id:any;
  constructor(public service:RTOService) { }

  ngOnInit() {
    this.id= sessionStorage.getItem("uid");
   console.log(this.id);
   }

   AddMyinfo(myForm)
   {
     let data=myForm.form.value;
     console.log(data);
    this.service.CallAppointMent(data).subscribe(()=>
    {
      console.log(data);
      window.alert("AppointMent Scheduled")
    })

   }

}
