import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( public signupservice:SignupService) { }

  ngOnInit() {
  }

  Add(myForm)
  {
    let data=myForm.form.value;

    this.signupservice.Add(data).subscribe(()=>
    {
      window.alert("sucessfull")
    })

  }
}
