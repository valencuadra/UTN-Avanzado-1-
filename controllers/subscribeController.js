const knex = require('../db/conexion');

const subscribeSocio = (req, res) => {
    res.send(`Te envío el formulario para que seas parte`)
}

const selectSocio = (req, res) => {
    knex.select('*')
    .from('subscribe')
    .then((response) => {
        for (row of response) {
            console.log(`${row['nombre']} - ${row['descripcion']}`);            
        }
        res.send(`Te muestro quienes forman parte de nuestro club`)
    })
    .catch((err) => {
        console.log(`${err}`);
    })
}

const crearSocio = (req, res) => {
    res.send(`Socio Confirmado`)
}

module.exports = {
    subscribeSocio,
    selectSocio,
    crearSocio
}