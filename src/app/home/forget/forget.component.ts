import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  myForm: FormGroup;
  loginData: any;
  response: any;

  constructor() {
    this.myForm = new FormGroup({
      Username: new FormControl("", Validators.required)
    });
   }

  ngOnInit() {
  }
  
  OnSubmit(){

  }
}
