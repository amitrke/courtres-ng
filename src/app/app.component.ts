import { Component, ChangeDetectorRef } from '@angular/core';
import { GoogleSignInSuccess } from 'angular-google-signin';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'app';

  private myClientId = '577808984615-h6fgitnl31qu5fsoej8p6sbt51a3vb6j.apps.googleusercontent.com';
  public name: Observable<string>;
  public name1: string;
  private changeDetectRef:ChangeDetectorRef;

  constructor(private ref: ChangeDetectorRef) {
    this.changeDetectRef = ref;
  }

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let id: string = googleUser.getId();
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    this.name1 = profile.getName();
    console.log('ID: ' +
      profile
        .getId()); // Do not send to your backend! Use an ID token instead.
    this.name = Observable.of(profile.getName()).share();
    this.changeDetectRef.detectChanges();
  }
}
