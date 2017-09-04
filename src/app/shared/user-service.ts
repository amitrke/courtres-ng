import { Injectable } from '@angular/core';
import { Response, Http, RequestOptionsArgs} from '@angular/http';
import { UserQuery } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
    private dataUrl = 'https://m9x0yanp9f.execute-api.us-east-1.amazonaws.com/prod/microservice';

    constructor(private http: Http) { }

    getUser(id: string): Observable<UserQuery> {
        const requestOptions: RequestOptionsArgs = {
            params: {'TableName': 'courtres_users', 'id': id}
        };
        return this.http.get(this.dataUrl, requestOptions)
            .map(res => res.json());
    }
}
