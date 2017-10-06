import { Component, OnChanges, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BaseQuery, User } from '../shared/models';
import { BaseService } from '../shared/base-service';

@Component({
  selector: 'app-hello-db',
  templateUrl: './hello-db.component.html',
  styleUrls: ['./hello-db.component.css']
})
export class HelloDBComponent implements OnChanges {
  public dbuser: BaseQuery<User>;
  @Input() user: gapi.auth2.BasicProfile;

  constructor(
    private service: BaseService<BaseQuery<User>>,
    private route: ActivatedRoute,
    private changeDetectRef: ChangeDetectorRef
  ) {}

  ngOnChanges() {
    this.service.get(this.user.getId())
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
