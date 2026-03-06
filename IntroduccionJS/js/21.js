


// Arrow Functions
const sumar2 = (n1, n2) => console.log(n1 + n2)



sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)

aprendiendo('JavaScript')


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
meses.forEach( mes => {
    if (mes == 'Marzo') {
        console.log('Marzo si existe')
    }
});

let resultado;
// Some ideal para arreglo de objetos
resultado = carrito.some(producto => producto.nombre === 'Celular PRO');
console.log(resultado);

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0)
console.log(resultado);

// Filter
resultado = carrito.filter( producto => producto.precio < 600)
console.log(resultado);

