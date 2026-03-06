



// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto de enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// getElementById
const heading2 = document.getElementById('heading');
// console.log(heading2);

// Generar nuevo enlace 
const nuevoEnlace = document.createElement('A')

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace);

// console.log(nuevoEnlace)

// Eventos
// console.log(1);

// window.addEventListener('load', imprimir); // Espera a que el JS y los archivso que dependen del HTML estén listos
//     console.log(2);

// function imprimir() {
//     console.log(2);
// }

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { // Solamente espera a que se descargue el HTML, pero no espera CSS o imagenes
//     console.log(4);
// })

// console.log(5);

// window.onscroll = function () {
//     console.log('scroling...')
// }

// Seleccionar elementos y asociales un evento
// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento.target)
//     evento.preventDefault();
//     console.log('Enviando formulario');
// });

// Eventos de los inputs y textArea
const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de submit
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Validar el formulario
    const { nombre, email, mensaje } = datos;

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return; // Corta la ejecución del código
    }

    // Enviar el formulario
    console.log('Enviando formulario');
    mostrarAlerta('Formulario enviado');
});

function leerTexto(evento) {
    // console.log(evento.target.value);

    datos[evento.target.id] = evento.target.value

    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove()
    }, 5000);

}

// // Muestra un error en pantalla
// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild(error);

//     //Desaparezca despues de 5 segundos
//     setTimeout(() => {
//         error.remove()
//     }, 5000);

// }

// // Muestra correcto en pantalla
// function mostrarCorrecto(mensaje) {
//     const correcto = document.createElement('P');
//     correcto.textContent = mensaje;
//     correcto.classList.add('correcto');

//     formulario.appendChild(correcto);

//     //Desaparezca despues de 5 segundos
//     setTimeout(() => {
//         correcto.remove()
//     }, 5000);
// }