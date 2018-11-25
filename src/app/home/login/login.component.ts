import { Component, OnInit } from "@angular/core";
import { HomeHttpServiceService } from "../home-http-service.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  loginData: any;
  response: any;

  constructor(private _service: HomeHttpServiceService) {
    this.myForm = new FormGroup({
      Username: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  OnSubmit() {
    debugger;
    if (this.myForm.valid) {
      this.loginData = {
        email: this.myForm.controls["Username"].value,
        password: this.myForm.controls["Password"].value
      };
      this._service.LoginService(this.loginData).subscribe(data => {
        this.response = data;
        debugger;
      });
    }
  }
}
