import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { RoutesService } from './routes.service';
import { AccountComponent } from './account/account.component';
import { UserComponent } from './account/user/user.component';
import { AdminComponent } from './account/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutesService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }