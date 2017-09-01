import { Injectable } from '@angular/core';
import { Response, Http, RequestOptionsArgs} from '@angular/http';
import { HelloDb } from './hello-db';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HelloDBService {

  private dataUrl = 'https://m9x0yanp9f.execute-api.us-east-1.amazonaws.com/prod/microservice';

  constructor(private http: Http) { }

  getData(userId: string): Observable<HelloDb> {
    const requestOptions: RequestOptionsArgs = {
        params: {'TableName': 'courtres_users', 'id': userId}
      };
    return this.http.get(this.dataUrl, requestOptions)
            .map(res => res.json());
  }

}
