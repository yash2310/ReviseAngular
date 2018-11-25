import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HomeHttpServiceService {
  header: any;
  constructor(private httpclient: Http) {
    this.header = new Headers({
      "Content-Type": "json"
    });
  }

  LoginService(data) {
    return this.httpclient
      .post("http://localhost:50207/api/Login/Login", data)
      .pipe(map((response: any) => {return response.json()}));
  }

  // getData() {
  //   this.httpclient.get("")
  //     .subscribe(
  //       (data: any[]) => {
  //         if (data.length) {

  //         }
  //       })
  // }
}
