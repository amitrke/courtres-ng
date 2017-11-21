import { Component,
  OnInit,
  OnChanges,
  Input,
  ChangeDetectorRef,
  Output,
  EventEmitter
} from '@angular/core';
import { BaseDBResponse, User } from '../shared/models';
import { BaseService } from '../shared/base-service';
import { Store } from '../shared/store';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

  public dbuser: User;
  @Input() user: gapi.auth2.BasicProfile;
  @Output() loginEvent = new EventEmitter<String>();

  constructor(
    private service: BaseService<BaseDBResponse<User>>,
    private changeDetectRef: ChangeDetectorRef,
    private logger: NGXLogger,
    private store: Store
  ) {}

  ngOnInit() {
  }

  ngOnChanges() {
    this.logger.debug('login component ngOnChanges');
    const newUserObj: User = new User(this.user.getId(), '', '');
    this.logger.debug('newUserObj:' + newUserObj);
    this.service.get(newUserObj)
      .then(res => {
        if (!res.Item) { // Register the new user.
          this.logger.debug('User not found, creating a new one');
          newUserObj.importGoogleProfile(this.user);
          this.service.create(newUserObj).then(
            r => {
              this.pullUserInfo(r);
            }
          );
        } else {
          this.pullUserInfo(res);
        }
      });
  }

  pullUserInfo(res: BaseDBResponse<User>) {
    if (res.Item) {
      this.dbuser = res.Item;
      this.store.user = res.Item;
      this.loginEvent.emit('res.Item'); // Before I emit this I should also get the relationship from db.
      this.changeDetectRef.detectChanges();
    } else {
      this.logger.error('Invalid user data from database:' + res);
    }
  }
}
