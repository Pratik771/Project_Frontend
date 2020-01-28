import { Component, OnInit } from '@angular/core';
import { RTOService } from '../rto.service';

@Component({
  selector: 'app-password-history',
  templateUrl: './password-history.component.html',
  styleUrls: ['./password-history.component.css']
})
export class PasswordHistoryComponent implements OnInit {
result:any
  constructor(public service:RTOService) { }

  ngOnInit() {
    this.service.getPasswordHistory().subscribe((list)=>{
      this.result=list;
      console.log(this.result)

      console.log(this.result);
    })
  }

  getPasswordHistory()
  {
      this.service.getPasswordHistory().subscribe((list)=>{
        this.result=list;
        console.log(this.result)

        console.log(this.result);
      })
  }    


}
