
// Arreglos o Arrays

const numeros = [1, 2, 3, 4, 5]

console.log(numeros);


// const meses = new Array('Enero', 'Marzo', 'Abril')

console.log(meses);

const arreglo = ['Hola', 10, true, null, {nombre: "Juan"}, [1, 2, 3]]
console.table(meses);

// console.log(numeros[4]);
// console.log(numeros[2]);

// // Conocer la extensión de un arreglo
// console.log(meses.length);

// meses.forEach( function(mes) {
//     console.log(mes)
// })

// numeros.forEach( function(numero) {
//     console.log(numero)
// })


numeros.push(60, 70, 80); // Agrega al final del arreglo

numeros.unshift(-10, -20, -30) // Agrega al inicio del arreglo

const meses = new Array('Enero', 'Marzo', 'Abril')

meses.pop(); // Elimina el último elemento
meses.shift(); // Elimina el primer elemento

meses.splice(2, 1);

console.table(meses);

// Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);

