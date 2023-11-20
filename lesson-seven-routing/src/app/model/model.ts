interface ICar {
    id: number,
    marka: string,
    model: string,
    color: string,
    pictureUrl: string,
    year: number
}

export class Car implements ICar {
    constructor(
        public id: number = 0,
        public marka: string = '',
        public model: string = '',
        public color: string = '',
        public pictureUrl: string = '',
        public year: number = 2023
    ){}
}