import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { GoogleSignInComponent } from 'angular-google-signin';

import { AppComponent } from './app.component';
import { HelloDBComponent } from './hello-db/hello-db.component';
import { UserService } from './shared/user-service';
import { LoginComponent } from './login/login.component';
import {MdButtonModule, MdCheckboxModule, MdMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    GoogleSignInComponent,
    HelloDBComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MdButtonModule, MdCheckboxModule, BrowserAnimationsModule, MdMenuModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
