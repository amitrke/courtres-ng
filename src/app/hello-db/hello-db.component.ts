import { Component, OnInit } from '@angular/core';
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
export class HelloDBComponent implements OnInit {
  public dataObservable: Observable<HelloDb>;

  constructor(
    private service: HelloDBService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dataObservable = this.service.getData();
  }
}
