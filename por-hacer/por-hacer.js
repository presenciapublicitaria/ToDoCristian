const fs = require('fs');

let listadoporhacer = []

const guardarDB = () => {
    let data = JSON.stringify(listadoporhacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })

}

const cargarDB = () => {

    try {
        listadoporhacer = require('../db/data.json');
    } catch (error) {
        listadoporhacer = [];
    }

}


const crear = (descripcion) => {

    cargarDB();

    let porhacer = {
        descripcion,
        completado: false
    };

    listadoporhacer.push(porhacer);

    guardarDB();

    return porhacer;

}

const getListado = () => {

    cargarDB();

    return listadoporhacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoporhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar
}