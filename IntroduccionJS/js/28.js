
//# Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }

    formatearProducto() {
        return `El ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    ObtenerPrecio() {
        console.log(this.precio)
    }
}

// Herencia
class Libro extends Producto {
    constructor (nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su isbn es: ${this.isbn}`;
    }

    ObtenerPrecio() {
        super.ObtenerPrecio()
        console.log('Y si hay en existencia')
    }
}

const libro = new Libro('JavaScript La Revelación', 120, '12312312312')

console.log(libro.formatearProducto())
libro.ObtenerPrecio()

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 800);

console.log(producto2.getPrecio())
console.log(producto3)
console.log(libro)