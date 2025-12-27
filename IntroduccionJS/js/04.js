// String o cadenas de texto
const tweet = 'Aprendiendo JavaScript con el curso Desarrollo Web Completo';
const producto2 = 'Monitor HD"';
const email = 'correo@correo.com'

// const producto2 = String('Monitor de 30 pulgadas')
// const producto3 = new String('Moniitor de 50 pulgadas')

console.log(tweet.length);
console.log(producto2);
// console.log(producto2)
// console.log(producto3)

// Encontrar un elemento en un String, retorna la posición 
// indexOf
console.log(tweet.indexOf('JavaScript'));
console.log(tweet.indexOf('Tablet'));
console.log(tweet.indexOf('@'));

// Retorna true o false si encuentra un elemento en un string
// includes
console.log(tweet.includes('JavaScript'));
console.log(tweet.includes('Tablet'));