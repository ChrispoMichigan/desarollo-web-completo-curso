


const reproductor = {
    reproducir : function(id) {
        console.log(`Reproducir canción con el ID: ${id}`);
    },
    pausar : function() {
        console.log('Pausando...')
    },
    crearPlaylist : function(nombre) {
        console.log(`Creeando playlist  ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando canción ${id}`)
}

reproductor.reproducir(3840)

reproductor.crearPlaylist('Heavy Metal')
