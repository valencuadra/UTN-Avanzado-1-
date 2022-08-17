// import express from 'express';
const express = require('express');
const path = require('path');
const dontenv = require('dotenv').config();
const app = express();
const PORT= 3000;

const routerHome = require('./routes/home');

app.use(express.json());


app.get('/', (req, res) =>{
    res.send('página principal')
});
app.use('/home', routerHome);
app.use('/productos', require('./routes/productos'));

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto: ${PORT}`);
})

