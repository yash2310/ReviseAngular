import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {
  constructor(private _router: Router) { }

  canActivate(): boolean {
    debugger;
    let userinfo = localStorage.getItem["userinfo"];
    if (userinfo != null && JSON.parse(userinfo).role == 'admin') {
      return true;
    } else {
      this._router.navigate(["account/user"]);
      return false;
    }
  }
}