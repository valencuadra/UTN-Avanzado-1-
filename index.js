const express = require('express');
const app = express();
require('dotenv').config(); 
const Port = process.env.PORT || 8080;
const hbs= require('hbs');  
const mysql2= require('mysql2');
const path = require('path');
const { error } = require('console');


const conexion = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "Holasofe09!",
    port: 3306,
    database: "papafrito",
});

const conectar = (
conexion.connect((error)=>{
    if(error) throw error;
    console.log('base de datos ok!!!');
})
); 



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

    app.get('/productos', (req, res) => {

        let sql= 'SELECT * FROM papafrito';
        let query = conexion.query (sql, (err, results) => {    
            if(err) throw err;
        
            
        res.render('subscribe', {
            titulo:'Algunos de nuestros socios:',
            results})

        })
    });


///////////
app.get('/subscribe', (req, res) => {
    res.render('subscribe', {titulo:'rellena el siguiente formulario'});

});

app.post('/subscribe', (req, res) => {
    console.log(req.body);
    console.log(req.body.nombre);
    console.log(req.body.apellido);
    console.log(req.body.fechanacimiento);
    console.log(email);

    const {nombre, apellido,fechanacimiento, email} = req.body;
    console.log(nombre);
    console.log(apellido);
    console.log(fechanacimiento);
    console.log(email);

    //validacion

    if(nombre == "" && email == ""){
        let validacion = 'Faltan datos para suscribirte';

        res.render('subscribe', {titulo:'por favor, rellena el siguiente formulario'},
        validacion
        )}else{
            res.render('subscribe', {titulo:'rellena el siguiente formulario'});
    
        }

        let data = {
            nombre:nombre,
            apellido:apellido,
            fechanacimiento:fechanacimiento,
            email:email, 
        };
        let sql= "INSERT INTO PAPAFRITO SET ?"

        let query = conexion.query (sql, data, (err, results) => {    
            if(error) throw error;
            
        //para que el usuario cargue datos y quede en la misma pagina:
        //tuve que comentar 1***
        res.render('subscribe', {titulo:'Por favor, rellena el siguiente formulario'})    
        })
    });

    app.get('/subscribe', (req, res) => {
        res.render('subscribe', {titulo:'Escribenos'});

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
