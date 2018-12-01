import { Component, OnInit } from "@angular/core";
import { HomeHttpServiceService } from "../home-http-service.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  loginData: any;
  response: any;

  constructor(
    private _toastrService: ToastrService,
    private _service: HomeHttpServiceService,
    private _router: Router
  ) {
    this.myForm = new FormGroup({
      Username: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required)
    });
  }

  ngOnInit() { }

  OnSubmit() {
    debugger;
    if (this.myForm.valid) {
      this.loginData = {
        email: this.myForm.controls["Username"].value,
        password: btoa(this.myForm.controls["Password"].value)
      };
      this._service.LoginService(this.loginData).subscribe(data => {
        this.response = data;
        debugger;
        if (data.message == "Success") {
          localStorage.setItem("token", data.data.token);
          let userinfo = {
            name: data.data.name,
            email: data.data.email,
            role: "admin"
          };
          localStorage.setItem("userinfo", JSON.stringify(userinfo));
          this._toastrService.success("Successfully logged in !!");
          this._router.navigate(["/account/user"]);
        }
        else {
          if (data.data == "Exist") {
            this._toastrService.warning("User does not exist !!");
          } else {
            this._toastrService.error("Login Unsuccessfull");
          }
        }
      });
    }
  }
}
