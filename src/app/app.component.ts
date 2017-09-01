import { Component } from '@angular/core';
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
  public name: Observable<any>;

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    const googleUser: gapi.auth2.GoogleUser = event.googleUser;
    const id: string = googleUser.getId();
    const profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    this.name = Observable.of(profile).share();
  }
}
