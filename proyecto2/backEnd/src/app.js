// 1. Importar dependencias y modulos

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectionMongo } from './config/dataBase.js';

// 2. Hacer las configuraciones 
const app = express();
dotenv.config();
// Los cors  -> middlewares -> intermediario 
app.use(cors());

// const port= process.env.PORT || process.env.PORT2;
// condicional ternario
const port = process.env.PORT ? process.env.PORT : 6000;

connectionMongo();

// 3. Escuchar nuestro servidor para poder ejecutar el app
app.listen(port, ()=>{
    console.log(`El servidor se ejecuta en puerto ${port}`);
});

