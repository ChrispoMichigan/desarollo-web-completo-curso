const carrito = [
    { nombre : 'Monitor de 20 Pulgadas', precio : 500},
    { nombre : 'Televisión 50 Pulgadas', precio : 700},
    { nombre : 'Tablet', precio : 300},
    { nombre : 'Audifonos', precio : 200},
    { nombre : 'Teclado', precio : 50},
    { nombre : 'Celular', precio : 500},
    { nombre : 'Bocinas', precio : 300},
    { nombre : 'Laptop', precio : 800}
];

// ForEach <- Solo para mostrar
const arreglo1 = carrito.forEach(producto => console.log(producto.precio));

// map <- Para obtener un nuevo arreglo
const arreglo2 = carrito.map(producto => producto.nombre);

console.log(arreglo1)
console.log(arreglo2)