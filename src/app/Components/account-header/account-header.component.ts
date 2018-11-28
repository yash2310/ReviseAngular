import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-account-header",
  templateUrl: "./account-header.component.html",
  styleUrls: ["./account-header.component.css"]
})
export class AccountHeaderComponent implements OnInit {
  name: string;
  constructor() {
    this.name = JSON.parse(localStorage.getItem("userinfo")).name;
  }

  ngOnInit() {}
}
