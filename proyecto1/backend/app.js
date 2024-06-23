//1. importamos las dependencias y modulos que necesitamos
import express from 'express';
import dotenv from 'dotenv';
//Variables de entorno -> nos guardan informacion delicada

import conectionMongo from './config/db.js';
import productsRouter from './routes/produts.routes.js';
import { connect } from 'mongoose';

//2.Configurar el uso de nuestro servidor y de nuestras variables de

const app = express(); //configuramos nuestro servidor
dotenv.config(); //configuramos nuestras variables de entorno
const port = process.env.PORT;

// Conectese a la base de Datos
conectionMongo();

// usamos las rutas
app.use('/',productsRouter);

// Prueba 
// app.get('/', (req, res) => {
//     res.send('HOLA, ESTO ES UNA PETICIÓN A MI SERVIDOR');
// });


//3. escuchar nuestro servidor (ejecutarlo)
app.listen(port, () => {
    console.log(`El servidor se está escuchando en: http://localhost:${port}`);
});

