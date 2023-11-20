interface ICar {
    marka: string;
    model: string;
    color: string;
    year: number
}

export default class Car implements ICar {

    constructor(
        public marka: string,
        public model: string,
        public color: string,
        public year: number
    ){}
}