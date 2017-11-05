import { RequestOptionsArgs} from '@angular/http';

export class BaseModel {

    public dateCreated: Date;
    public dateModified: Date;

    constructor(
        public id: string,
        public name: string,
        public TableName: string
    ) {}

    public getCreateRequest(): BaseRequest {
        return new BaseRequest(this, this.TableName);
    }
}

export class BaseDBResponse<T> {
    constructor (
        public Item: T,
        public Items: T[],
        public count: number,
        public ScannedCount: number
    ) {}
}

export class BaseRequest {
    constructor(
        public Item: BaseModel,
        public TableName: string
    ) {}
}

export class Facility extends BaseModel {
    constructor (id: string, name: string) {
        super(id, name, 'courtres_facilities');
    }
}

export class User extends BaseModel {
    public email: string;
    constructor (id: string, name: string, email: string) {
        super(id, name, 'courtres_users');
    }
    public importGoogleProfile(profile: gapi.auth2.BasicProfile) {
        this.id = profile.getId();
        this.email = profile.getEmail();
        this.name = profile.getName();
    }
}
