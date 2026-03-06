
// This

const reservacion = {
    nombre: 'Chris',
    apelllido: 'Castillo',
    total: 500,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}

console.log(reservacion.nombre)
reservacion.informacion()