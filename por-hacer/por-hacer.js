const fs = require('fs'); // libreria para crear archivo

let listadoporHacer = []; // crea arreglo, para modificar la base de datos

const guardarDB = () => {

        let data = JSON.stringify(listadoporHacer);
        fs.writeFile('./base-datos/data.json', data, (err) => {
            if (err) throw new Error('no se pudo grabar', err);
        });
    } // modifica con data despues de transformar el arreglo a string la bases de dato
const cargarDB = () => {
        try {
            listadoporHacer = require('../base-datos/data.json');
        } catch (eror) {
            listadoporHacer = [];

        }
    } // trata el error, si no puede llamar la base de datos,
    // declara el vector como nuevo

const crear = (descripcion) => {
        cargarDB();
        let porHacer = {
            descripcion,
            completado: false
        };
        listadoporHacer.push(porHacer);
        guardarDB();
        return porHacer;

    } // carga la base de datos para modificar, y le carga,
    //informacion segun los datos obtenidos en consola

const getListado = () => {
        //    listadoporHacer = require('../base-datos/data.json'); o cargar la base
        cargarDB();
        return listadoporHacer;

    } // carga la base de datos y la devuelve como sctring

const actualizar = (descripcion, completado) => {

        cargarDB();
        let index = listadoporHacer.findIndex(tarea => tarea.descripcion === descripcion)
        if (index >= 0) {
            listadoporHacer[index].completado = completado;
            guardarDB();
            return true;
        } else {
            return false;
        }
    } // carga el arreglo que es la base de datos, busca el parametro
    // en ese arreglo y mira si coincide la descripcion a modificar
    //luego compara si la posicion del vector es correcta, y modifica
    // la posicion con un true, guarda el arreglo 

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoporHacer.filter(erase => erase.descripcion !== descripcion)
    if (nuevoListado.length === listadoporHacer.length) {
        return false;
    } else {
        listadoporHacer = nuevoListado;
        guardarDB();
        return true;
    }

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}