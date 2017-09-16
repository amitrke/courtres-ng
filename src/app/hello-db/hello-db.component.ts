import { Component, OnChanges, Input, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../shared/user-service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserQuery } from '../shared/user';

// Observable operators
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-hello-db',
  templateUrl: './hello-db.component.html',
  styleUrls: ['./hello-db.component.css']
})
export class HelloDBComponent implements OnChanges {
  public dbuser: UserQuery;
  @Input() user: gapi.auth2.BasicProfile;

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private changeDetectRef: ChangeDetectorRef
  ) { }

  ngOnChanges() {
    this.service.getUser(this.user.getId())
      .then(res => {
        this.dbuser = res;
        this.changeDetectRef.detectChanges();
        console.dir(res);
      });
  }

  onClick() {
      console.log('Logging in user');
  }
}
