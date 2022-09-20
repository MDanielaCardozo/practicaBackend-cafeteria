import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import './src/database';
import router from './src/routes/productos.routes';
import path from 'path';

//const express = require('express')

//instancia de express
const app = express();

//queremos tomar un puerto de la pc
app.set('port', process.env.PORT || 4000);

//quiero que mi backend escuche el puerto
app.listen(app.get('port'), ()=>{
    console.log(`Estamos en el puerto ${app.get('port')}`)
})

//middlewares
app.use(morgan('dev'));  //da informacion en la terminal
app.use(cors()); //permite recibir peticiones remotas
//los dos middlewares siguientes sirven para procesar un objeto JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//cargar un archivo estatico
//app.use(express.static('./public'));
app.use(express.static(path.join(__dirname, 'public')));
//console.log(__dirname,'public')

//rutas
app.use('/apicafe', router);