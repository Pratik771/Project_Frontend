import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  uname:any;
  constructor() { }

  ngOnInit() {

    this.uname=sessionStorage.getItem("Uname");
    console.log(this.uname)
  }

}
