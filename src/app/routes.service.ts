import { Injectable, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./home/login/login.component";
import { RegisterComponent } from "./home/register/register.component";
import { AccountComponent } from "./account/account.component";
import { AdminComponent } from "./account/admin/admin.component";
import { UserComponent } from "./account/user/user.component";
import { ForgetComponent } from "./home/forget/forget.component";
import { AuthGuard } from "./auth.guard";
import { RoleGuard } from "./role.guard";
import { LogoutComponent } from "./account/logout/logout.component";

// @Injectable({
//   providedIn: 'root'
// })
export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "forgetpassword", component: ForgetComponent },
    ]
  },
  {
    path: "account",
    component: AccountComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "admin", canActivate: [RoleGuard], component: AdminComponent },
      { path: "user", component: UserComponent },
      { path: "logout", component: LogoutComponent }
    ]
  },
  { path: '**', redirectTo: '/home/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesService {
  constructor() { }
}
