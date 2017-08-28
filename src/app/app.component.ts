import { Component } from '@angular/core';
import { GoogleSignInSuccess } from 'angular-google-signin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  private myClientId = '577808984615-h6fgitnl31qu5fsoej8p6sbt51a3vb6j.apps.googleusercontent.com';
  name = '';

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let id: string = googleUser.getId();
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    console.log('ID: ' +
      profile
        .getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    this.title = profile.getName();
  }
}
