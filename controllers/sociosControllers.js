const knex = require('../db/conexion');

const loadSocios = (req, res) => {
    knex.select('*')
    .from('socios')
    .then((response) => {
        for (row of response) {
            console.log(`${row['id']} - ${row['nombre']} - ${row['apellido']} - ${row['creado']}`);
        }
        res.send('te muestro los socios en la consola');
    })
    // Aqui tendriamos que hacer un render en el cual llame a todos los datos de los cuales recien hicimos un select
    .catch((err) => {
        console.log(`${err}`);
    });
}

const addSocio = (req, res) => {
    knex('socios').insert([{nombre: nombrevar}, {apellido: apellidovar}])
    res.send('socio agregado');  
}

module.exports={
    loadSocios,
    addSocio
}