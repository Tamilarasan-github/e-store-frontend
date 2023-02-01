export class Product {
    constructor(
        public id: number,
        public productCode: string,
        public name: string,
        public description: string,
        public pricePerUnit: number,
        public imageUrl: string,
        public status: string,
        public unitsInStock: number,
        public dateCreated: Date,
        public lastUpdated: Date
    )
    {}
}
