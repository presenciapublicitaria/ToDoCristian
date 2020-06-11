//Funciones
const opciones = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de tarea'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}


const argv = require('yargs')
    .command('crear', 'Crear una tarea', opciones)
    .command('actualizar', 'Actualizar la tarea', opciones)
    .help()
    .argv

module.exports = {
    argv
}