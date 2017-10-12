import { Component, OnInit, OnChanges, Input, ChangeDetectorRef } from '@angular/core';
import { BaseQuery, User } from '../shared/models';
import { BaseService } from '../shared/base-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

  public dbuser: BaseQuery<User>;
  @Input() user: gapi.auth2.BasicProfile;

  constructor(
    private service: BaseService<BaseQuery<User>>,
    private changeDetectRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
  }

  ngOnChanges() {
    const user: User = new User(this.user.getId(), '', '');
    this.service.get(user)
      .then(res => {
        this.dbuser = res;
        this.changeDetectRef.detectChanges();
      });
  }
}
