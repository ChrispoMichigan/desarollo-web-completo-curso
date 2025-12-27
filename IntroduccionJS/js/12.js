"use strict"; // Correr javascript en modo estricto

// Objeto
const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true
}

Object.freeze(producto); // <- No deja agregar nuevas propiedades ni eliminar ni modificar
delete producto.precio
producto.precio = 123

Object.seal(producto); // <- No deja eliminar, ni agregar nueva propidades, pero si deja modificar existentes

// producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto);