export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string
    ) {}
}

export class UserQuery {
    constructor(
        public Items: User[],
        public Count: number,
        public ScannedCount: number
    ) {}
}
