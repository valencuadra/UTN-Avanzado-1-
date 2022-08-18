const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',
        port : 3306,
        user : 'root',
        password : 'Ju1638313',
        database : 'ejercicio'
    }
});

knex.schema.hasTable('socios').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('socios', function(t) {
        t.increments('id').primary();
        t.string('nombre', 100);
        t.string('apellido', 100);
        t.timestamp('creado').defaultTo(knex.fn.now());
      });
    }
});

module.exports = knex;