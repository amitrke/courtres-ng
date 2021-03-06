import { Component, ChangeDetectorRef } from '@angular/core';
import { GoogleSignInSuccess } from 'angular-google-signin';
import { Observable } from 'rxjs/Observable';
import { User } from './shared/models';
import { NGXLogger } from 'ngx-logger';
import { Store } from './shared/store';
import { Router } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NGXLogger]
})

export class AppComponent {
  public title = 'app';

  private myClientId = '577808984615-h6fgitnl31qu5fsoej8p6sbt51a3vb6j.apps.googleusercontent.com';
  public name: string;
  public profile: gapi.auth2.BasicProfile;

  constructor(
    private changeDetectRef: ChangeDetectorRef,
    private logger: NGXLogger,
    public store: Store,
    private router: Router
  ) { }

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    const googleUser: gapi.auth2.GoogleUser = event.googleUser;
    const id: string = googleUser.getId();
    this.profile = googleUser.getBasicProfile();
    this.name = this.profile.getName();
    this.changeDetectRef.detectChanges();
  }

  receiveLoginEvent($event) {
    this.logger.debug('Received Login event' + JSON.stringify(this.store));
    this.changeDetectRef.detectChanges();
  }
}
