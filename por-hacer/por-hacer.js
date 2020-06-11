const fs = require('fs');
const { rejects } = require('assert');

let listadoporhacer = []

const guardarDB = () => {
    let data = JSON.stringify(listadoporhacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })

}


const crear = (descripcion) => {

    let porhacer = {
        descripcion,
        completado: false
    };

    listadoporhacer.push(porhacer);

    guardarDB();

    return porhacer;

}

module.exports = {
    crear
}