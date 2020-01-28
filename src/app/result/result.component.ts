import { Component, OnInit } from '@angular/core';
import { RTOService } from '../rto.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
id:any;
  constructor(public service:RTOService) { }

  ngOnInit() {
    this.id=sessionStorage.getItem("uid");
    console.log(this.id)
  }

  SetResult(myForm)
  {
    let data=myForm.form.value;
    console.log(data)

    this.service.SetResult(data).subscribe(()=>
    {
      console.log(data);
      window.alert("Status Updated sucessfully")
    })

  }

}
