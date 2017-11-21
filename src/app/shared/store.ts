import { Injectable } from '@angular/core';
import { User } from '../shared/models';

@Injectable()
export class Store {
    public user: User;
}
