import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { GoogleSignInComponent } from 'angular-google-signin';

import { AppComponent } from './app.component';
import { BaseService } from './shared/base-service';
import { LoginComponent } from './login/login.component';
import { MdButtonModule, MdCheckboxModule, MatMenuModule, MdMenuModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent,
    GoogleSignInComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    MdMenuModule,
    MatMenuModule,
    MdToolbarModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF})
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
