
// POO
/** Object Literal **/
const producto = {
    nombre : 'Tablet',
    precio : 500
}

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

function Cliente(nombre, precio) {
    this.nombre = nombre;
    this.apellido = precio;
}

Cliente.prototype.formatearCliente = function () {
    return `El cliente ${this.nombre} ${this.apellido}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 800);

// Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function () {
    return `El ${this.nombre} tiene un precio de: ${this.precio}`;
}

const cliente = new Cliente('Juan', 'De la Torre')

console.log(cliente.formatearCliente())

function formatearProducto (producto) {
    return `El ${producto.nombre} tiene un precio de: ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto())

