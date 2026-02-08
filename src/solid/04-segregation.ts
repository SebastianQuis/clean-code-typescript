
// subdividir las interfaces dependiendo el metodo que aplica a la clase

interface Bird {
    // fly(): void;
    eat(): void;
    run(): void;
    // swim(): void;
}

interface FlyingBird {
    fly(): void;
}

interface SwimmingBird {
    swim(): void;
}


class Tucan implements Bird, FlyingBird {
    fly(): void { }
    eat(): void { }
    run(): void { }
}

class Ostrich implements Bird, SwimmingBird {
    eat(): void { }
    run(): void { }
    swim(): void { }
}
