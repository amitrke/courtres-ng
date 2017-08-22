import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import {HelloDb} from './hello-db'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HelloDBService {
  
  private dataUrl = "https://08fqotbbsa.execute-api.us-east-1.amazonaws.com/beta";

  constructor(private http: Http) { }

  getData(): Promise<HelloDb> {
    return this.http.get(this.dataUrl)
               .toPromise()
               .then(function (response:Response){
                  return response.json();
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
