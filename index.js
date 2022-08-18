const express = require('express');
const path = require('path');
const dontenv = require('dotenv').config();
const app = express();
const hbs = require('hbs');
const mysql = require('mysql2');
const PORT = process.env.PORT || 8080;

//Rutas
const routerHome = require('./routes/homeRoutes');
const routerSocios = require('./routes/sociosRoutes');

//Configuracion de middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:false}));

//Configuracion de HBS
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
// hbs.registerPartial(path.join(__dirname, 'views/partials'));

//Routes
app.get('/', (req, res) =>{
    res.render('index')
});
app.use('/home', routerHome);
app.use('/socios', routerSocios);

app.listen(PORT, ()=>{
console.log(`servidor corriendo en puerto: ${PORT}`);
})