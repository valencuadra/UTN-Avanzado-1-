const express = require('express');
const app = express();
require('dotenv').config(); 
const Port = process.env.PORT || 8080;
const hbs= require('hbs');  
const mysql2= require('mysql2');
const path = require('path');
const { error } = require('console');


//middlewares
app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send('nos estamos conectando a una base de datos');

    });
    app.get('/', (req, res) => {
        res.render('index', {titulo:'Bienvenido a nuestra appsprint'});

    });

    app.listen(Port, ()=>{
        console.log(`Servidor corriendo en el puerto ${Port}`);  
    });

    app.on('error', (error) => {
        console.log(`Tenemos un error: ${error}`);  
    }); 


    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname,'views'));
    console.log(__dirname)

    hbs.registerPartials(path.join(__dirname, 'views/partials'));
