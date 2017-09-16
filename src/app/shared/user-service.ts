import { Injectable } from '@angular/core';
import { Response, Http, RequestOptionsArgs} from '@angular/http';
import { UserQuery } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    private dataUrl = 'https://m9x0yanp9f.execute-api.us-east-1.amazonaws.com/prod/microservice';

    constructor(private http: Http) { }

    getUser(id: string): Promise<UserQuery> {
        const requestOptions: RequestOptionsArgs = {
            params: {'TableName': 'courtres_users', 'id': id}
        };
        return this.http.get(this.dataUrl, requestOptions)
           .toPromise()
            .then(response => response.json() as UserQuery)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
