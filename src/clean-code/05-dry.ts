

type Size = '' | 'S' | 'M' | 'L';


class Product {

    constructor(
        public name: String = '',
        public price: number = 0,
        public size: Size = '',
    ) { }

    isProductReady(): boolean {

        for (const key in this) {
            // console.log(key + typeof this[key]);
            switch (typeof this[key]) {
                case 'string':
                    if ((this[key] as string).length === 0) {
                        throw Error(`The ${key} is required`);
                    }
                    break;
                case 'number':
                    if ((this[key] as number) === 0) {
                        throw Error(`The ${key} is required`);
                    }
                    // return false;
                    break;
                default:
                    return false;
            }
        }

        return true;

        // if (this.name.length === 0) throw Error('The name is required');
        // if (this.price === 0) throw Error('The price is required');
        // if (this.size.length === 0) throw Error('The size is required');
        // return true;
    }

    // sin aplicar DRY
    toString() {
        // if (this.name.length === 0) throw Error('The name is required');
        // if (this.price === 0) throw Error('The price is required');
        // if (this.size.length === 0) throw Error('The size is required');

        if (!this.isProductReady()) return;

        return `${this.name} (${this.size}) - $${this.price}`;
    }

}


(() => {

    const bluePants = new Product('Blue large pants', 10);
    console.log(bluePants.toString());

})();



