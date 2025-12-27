
// Array Methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre : 'Monitor de 20 Pulgadas', precio : 500},
    { nombre : 'Televisión 50 Pulgadas', precio : 500},
    { nombre : 'Tablet', precio : 500},
    { nombre : 'Audifonos', precio : 500},
    { nombre : 'Teclado', precio : 500},
    { nombre : 'Celular', precio : 500},
    { nombre : 'Bocinas', precio : 500},
    { nombre : 'Laptop', precio : 500}
];

// forEach
meses.forEach( function(mes) {
    if (mes == 'Marzo') {
        console.log('Marzo si existe')
    }
});

// Includes -> Si es un arreglo plano
let resultado = meses.includes('Marzo');

// Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular PRO'
});

// Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0)

// Filter
resultado = carrito.filter(function(producto) {
    return producto.precio < 400
})
 
console.log(resultado);