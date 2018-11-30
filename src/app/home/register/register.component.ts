import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeHttpServiceService } from '../home-http-service.service';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/toaster-service.service';

export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerData: any;
  response: any;

  genders: Gender[] = [
    { value: "M", viewValue: "Male" },
    { value: "F", viewValue: "Female" },
    { value: "T", viewValue: "Transgender" }
  ];

  constructor(
    private _toastrService: ToasterService,
    private _service: HomeHttpServiceService,
    private _router: Router
  ) {
    this.registerForm = new FormGroup({
      Firstname: new FormControl("", Validators.required),
      Lastname: new FormControl("", Validators.required),
      Email: new FormControl("", Validators.required),
      Age: new FormControl("", Validators.required),
      Gender: new FormControl("", Validators.required),
      Address1: new FormControl("", Validators.required),
      Address2: new FormControl(""),
      City: new FormControl("", Validators.required),
      State: new FormControl("", Validators.required),
      Country: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required),
      CPassword: new FormControl("", Validators.required)
    });
  }

  ngOnInit() { }
  
  OnSubmit() {
    debugger;
    if (!this.registerForm.valid) {

    } else {
      this.registerData = {
        firstName: this.registerForm.controls[""].value,
        lastName: this.registerForm.controls[""].value,
        fullName: this.registerForm.controls[""].value,
        email: this.registerForm.controls[""].value,
        age: this.registerForm.controls[""].value,
        gender: this.registerForm.controls[""].value,
        address1: this.registerForm.controls[""].value,
        address2: this.registerForm.controls[""].value,
        city: this.registerForm.controls[""].value,
        state: this.registerForm.controls[""].value,
        country: this.registerForm.controls[""].value,
        encryptPassword: this.registerForm.controls[""].value,
        id: 0,
        active: true,
        createdBy: JSON.parse(localStorage.getItem("userinfo")).email,
        createdOn: Date.now(),
        updatedBy: JSON.parse(localStorage.getItem("userinfo")).email,
        updatedOn: Date.now()
      };
    }
  }

  OnReset() {
    debugger;
  }
}
