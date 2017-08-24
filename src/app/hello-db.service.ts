import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import {HelloDb} from './hello-db';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HelloDBService {

  private dataUrl = 'https://08fqotbbsa.execute-api.us-east-1.amazonaws.com/beta';

  constructor(private http: Http) { }

  getData(): Observable<HelloDb> {
    return this.http.get(this.dataUrl)
            .map(res => res.json());
  }

}
