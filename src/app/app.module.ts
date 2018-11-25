import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./home/register/register.component";
import { LoginComponent } from "./home/login/login.component";
import { RoutesService } from "./routes.service";
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
  MatInputModule
} from "@angular/material";
import { MatDividerModule } from "@angular/material/divider";
import { ForgetComponent } from "./home/forget/forget.component";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";

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
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    RoutesService,
    AppRoutingModule,
    RoutesService,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDividerModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
