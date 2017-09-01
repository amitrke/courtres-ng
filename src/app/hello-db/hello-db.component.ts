import { Component, OnChanges, Input } from '@angular/core';
import { HelloDBService } from '../hello-db.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HelloDb, DbDes } from '../hello-db';

// Observable operators
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hello-db',
  templateUrl: './hello-db.component.html',
  styleUrls: ['./hello-db.component.css']
})
export class HelloDBComponent implements OnChanges {
  public dataObservable: Observable<HelloDb>;
  @Input() user: string;

  constructor(
    private service: HelloDBService,
    private route: ActivatedRoute
  ) { }

  ngOnChanges() {
    this.dataObservable = this.service.getData(this.user);
  }
}
