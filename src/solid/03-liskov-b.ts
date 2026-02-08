
// clase abstractas sirve para trabajar con herencia
// al ser abstracta, buscamos que haya herencia entre las clases

export abstract class Vehicle {

    // constructor(private numberOfSeats: number) { }

    // getNumberOfSeats(): number {
    //     throw new Error('Method not implemented');
    // }


    abstract getNumberOfSeats(): number;
}


export class Tesla extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
        // throw new Error("Method not implemented.");
    }
}

export class Audi extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}


export class Ford extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}



