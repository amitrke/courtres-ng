export class BaseModel {

    public dateCreated: Date;
    public dateModified: Date;

    constructor(
        public id: string,
        public name: string,
        public tableName: string
    ) {}

}

export class BaseQuery<T extends BaseModel> {
    constructor (
        public Items: T[],
        public count: number,
        public ScannedCount: number
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
}
