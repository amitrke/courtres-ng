import { Injectable } from '@angular/core';
import { Response, Http, RequestOptionsArgs} from '@angular/http';
import { BaseModel, BaseQuery } from '../shared/models';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseService<T extends BaseQuery<BaseModel>> {
    private dataUrl = 'https://m9x0yanp9f.execute-api.us-east-1.amazonaws.com/prod/microservice';
    constructor(private http: Http) {}

    get(obj: BaseModel): Promise<T> {
        const requestOptions: RequestOptionsArgs = {
            params: {'TableName': obj.tableName, 'id': obj.id}
        };
        return this.http.get(this.dataUrl, requestOptions)
           .toPromise()
            .then(response => response.json() as T)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
