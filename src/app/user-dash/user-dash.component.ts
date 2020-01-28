
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {
  uname:any
  constructor() { }

  ngOnInit() {
    this.uname=sessionStorage.getItem("Uname");
    console.log(this.uname)
  }

}
