import { Component, OnInit } from "@angular/core";
import { HomeHttpServiceService } from "../home-http-service.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  loginData: any;
  response: any;

  constructor(private _service: HomeHttpServiceService, private _router: Router) {
    this.myForm = new FormGroup({
      Username: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required)
    });
  }

  ngOnInit() { }

  OnSubmit() {
    if (this.myForm.valid) {
      this.loginData = {
        email: this.myForm.controls["Username"].value,
        password: this.myForm.controls["Password"].value
      };
      this._service.LoginService(this.loginData).subscribe(data => {
        this.response = data;
        if (data.message == "Success") {
          localStorage.setItem('token', data.data.token);
          let userinfo = { name: data.data.name, email: data.data.email, role: 'admin' };
          localStorage.setItem('userinfo', JSON.stringify(userinfo));
          this._router.navigate(['/account/user']);
        }
      });
    }
  }
}
