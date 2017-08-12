import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloDBComponent } from './hello-db/hello-db.component';
import { HelloDBService } from "./hello-db.service"


@NgModule({
  declarations: [
    AppComponent,
    HelloDBComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HelloDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
