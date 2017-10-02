export class Facility {
    constructor (
        public id: number,
        public name: string
    ) {}
}
export class FacilityQuery {
    constructor (
        public Items: Facility[],
        public count: number,
        public ScannedCount: number
    ) {}
}
