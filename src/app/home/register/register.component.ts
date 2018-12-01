import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HomeHttpServiceService } from "../home-http-service.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { timeout } from "q";

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
  isValid: boolean = false;

  genders: Gender[] = [
    { value: "M", viewValue: "Male" },
    { value: "F", viewValue: "Female" },
    { value: "T", viewValue: "Transgender" }
  ];

  constructor(
    private _toastrService: ToastrService,
    private _service: HomeHttpServiceService,
    private _router: Router
  ) {
    this.ReInitializeForm();
  }

  ngOnInit() { }

  OnSubmit() {
    this.isValid = true;
    debugger;
    if (!this.registerForm.valid) {
      this._toastrService.warning("Invalid Form Data !!!");
      this.isValid = false;
    } else {
      this.registerData = {
        firstName: this.registerForm.controls["Firstname"].value,
        lastName: this.registerForm.controls["Lastname"].value,
        fullName:
          this.registerForm.controls["Firstname"].value +
          " " +
          this.registerForm.controls["Lastname"].value,
        email: this.registerForm.controls["Email"].value,
        age: this.registerForm.controls["Age"].value,
        gender: this.registerForm.controls["Gender"].value,
        address1: this.registerForm.controls["Address1"].value,
        address2: this.registerForm.controls["Address2"].value,
        city: this.registerForm.controls["City"].value,
        state: this.registerForm.controls["State"].value,
        country: this.registerForm.controls["Country"].value,
        encryptPassword: btoa(this.registerForm.controls["Password"].value),
        // id: 0,
        active: true,
        createdBy: JSON.parse(localStorage.getItem("userinfo")).email,
        // createdOn: Date.now(),
        updatedBy: JSON.parse(localStorage.getItem("userinfo")).email
        // updatedOn: Date.now()
      };

      debugger;
      this._service.RegisterService(this.registerData).subscribe(data => {
        this.response = data;
        debugger;
        if (data.message == "Failed") {
          if (data.data == "Duplicate") {
            this._toastrService.warning("Email already exist !!");
          } else {
            this._toastrService.error("Registration Unsuccessfull");
          }
        } else {
          this._toastrService.success("Registration Successfull");
          this.ReInitializeForm();
        }
      });
      this.isValid = false;
    }
  }

  OnReset() {
    debugger;
  }

  ReInitializeForm() {
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
}
