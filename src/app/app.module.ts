import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./home/register/register.component";
import { LoginComponent } from "./home/login/login.component";
import { routes } from "./routes.service";
import { AccountComponent } from "./account/account.component";
import { UserComponent } from "./account/user/user.component";
import { AdminComponent } from "./account/admin/admin.component";
import { HomeHeaderComponent } from "./Components/home-header/home-header.component";
import { AccountHeaderComponent } from "./Components/account-header/account-header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { LeftNavComponent } from "./Components/left-nav/left-nav.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule
} from "@angular/material";
import { MatDividerModule } from "@angular/material/divider";
import { ForgetComponent } from "./home/forget/forget.component";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "./auth.guard";
import { RouterModule } from "@angular/router";
import { AuthService } from "./auth.service";
import { LogoutComponent } from './account/logout/logout.component';
import { ToasterService } from "./toaster-service.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    UserComponent,
    HomeHeaderComponent,
    AccountHeaderComponent,
    FooterComponent,
    LeftNavComponent,
    ForgetComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
