//Funciones
// const opciones = {
//     descripcion: {
//         demand: true,
//         alias: 'd',
//         desc: 'Descripcion de tarea'
//     },
//     completado: {
//         alias: 'c',
//         default: true,
//         desc: 'Marca como completado o pendiente la tarea'
//     }
// }

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear una tarea', { descripcion })
    .command('actualizar', 'Actualizar la tarea', { descripcion, completado })
    .command('borrar', 'Borrar la tarea', { descripcion })
    .help()
    .argv

module.exports = {
    argv
}