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
        console.log('========== POR HACER =========='.green);
        for (let tarea of listado) {

            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);

        }
        console.log('==============================='.green);
        break;

    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;

    default:

        console.log('Comando no reconocido');

}