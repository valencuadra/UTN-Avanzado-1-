

const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : 'Holasofe09!',
        database : 'papafrito'
    }
});


knex.schema.hasTable('subscribe').then(function(exists) {
    if (!exists) {
            return knex.schema.createTable('subscribe', function(t) {
            t.increments('id').primary();
            t.string('nombre', 100);
            t.string('apellido', 100);
            t.integer('fechanacimiento', 20);
            t.integer('email', 200);

        });
    }
});


module.exports = knex;
