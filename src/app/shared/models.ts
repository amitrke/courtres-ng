class BaseModel {

    public dateCreated: Date;
    public dateModified: Date;

    constructor(
        public id: string,
        public name: string
    ) {}

}

export class BaseQuery<T> {
    constructor (
        public Items: T[],
        public count: number,
        public ScannedCount: number
    ) {}
}

export class Facility extends BaseModel {
    constructor (id: string, name: string) {
        super(id, name);
    }
}

export class User extends BaseModel {
    public email: string;
    constructor (id: string, name: string, email: string) {
        super(id, name);
    }
}
