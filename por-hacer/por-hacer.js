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

module.exports = {
    crear,
    getListado
}