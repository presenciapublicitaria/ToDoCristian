const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colores = require('colors');
// const argv = require('yargs').argv;

// console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        // console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        console.log('========== POR HACER =========='.rainbow);
        for (let tarea of listado) {

            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);

        }
        console.log('==============================='.red);
        break;

    case 'actualizar':
        // console.log('Actualiza una tarea por hacer');

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;

    default:

        console.log('Comando no reconocido');

}