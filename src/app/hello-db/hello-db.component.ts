import { Component, OnInit } from '@angular/core';
import {HelloDBService} from '../hello-db.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {HelloDb} from '../hello-db';

// Observable operators
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hello-db',
  templateUrl: './hello-db.component.html',
  styleUrls: ['./hello-db.component.css']
})
export class HelloDBComponent implements OnInit {
  data: HelloDb;

  constructor(
    private service:HelloDBService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    //this.service.getData().then(d => this.data = d);

    
    this.route.paramMap
      .switchMap((params: ParamMap) => this.service.getData())
      .subscribe(data => this.data = data);
      
  }
}
