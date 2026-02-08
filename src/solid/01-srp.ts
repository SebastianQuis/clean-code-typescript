// Aplicando el principio de responsabilidad única

(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {
        getProduct(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product);
        }
    }

    class Mailer {
        private masterEmail: string = 'sebastianglg64@gmail.com';

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', template);
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productServive: ProductService;
        private mailer: Mailer;

        constructor(productServive: ProductService, mailer: Mailer) {
            this.productServive = productServive;
            this.mailer = mailer;
        }


        loadProduct(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productServive.getProduct(id);
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos 
            this.productServive.saveProduct(product);
        }

        notifyClients() {
            this.mailer.sendEmail(['client1@example.com'], 'to-clients');
        }
    }

    class CartBloc {
        private items: Object[] = [];

        addToCart(productId: number) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId);
        }
    }

    const mailer = new Mailer();
    const productService = new ProductService();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);

})();