const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'

};
const completado = {
    compledefault: true,
    alias: 'c',
    desc: 'marca como completado o como pendiente la tarea'
}; // creamos las opciones de entrada por terminal

const argv = require('yargs') //llamamos el yargs
    .command('crear', 'Crear un elemento por hacer', { descripcion }) // da la info de que hace 
    .command('actualizar', 'actualiza el estado compleato de la tarea', { descripcion, completado })
    .command('borrar', 'borra las tareas creadas', { descripcion })
    .help() //brinda la opcion help que si se ejecuta manda las opciones de arriba
    .argv; // regresa el argv

module.exports = {
    argv //exporta el argv
}