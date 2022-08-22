const express = require('express');
const app = express();
require('dotenv').config(); 
const Port = process.env.PORT || 8080;
const hbs= require('hbs');  
const mysql2= require('mysql2');
const path = require('path');
const { error } = require('console');


const homeRouter = require('./routes/homeRouter');
const subscribeRouter = require('./routes/subscribeRouter');


//middlewares
app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:false}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));
console.log(__dirname)

hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/', (req, res) => {
    res.send('nos estamos conectando');

    });
    app.get('/', (req, res) => {
        res.render('index', {titulo:'Bienvenido a nuestra appsprint'});

    });

    app.get('/', (req, res) =>{
        res.send('página principal')
        res.render('index')
    });
    app.use('/homeRouter', homeRouter);
    app.use('/subscribeRouter', subscribeRouter);


    app.on('error', (error) => {
        console.log(`Tenemos un error: ${error}`);  
    }); 



