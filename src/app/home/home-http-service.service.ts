import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class HomeHttpServiceService {

  constructor(private httpclient: HttpClient) { }

  LoginService(data) {
    this.httpclient.post("http://localhost:50207/api/Login/Login", data).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}