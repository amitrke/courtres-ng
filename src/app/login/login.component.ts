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
    private changeDetectRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
  }

  ngOnChanges() {
    const newUserObj: User = new User(this.user.getId(), '', '');
    this.service.get(newUserObj)
      .then(res => {
        if (!res.Item) { // Register the new user.
          newUserObj.importGoogleProfile(this.user);
          this.service.create(newUserObj);
        }
        this.loginEvent.emit('res.Item');
        this.dbuser = res.Item;
        this.changeDetectRef.detectChanges();
      });
  }
}
