// 1. Importaciones
import mongoose from 'mongoose';

// funcion flecha
const variable = async () => {}

// funcion declarativa
export async function connectionMongo (){
    try {
        await mongoose.connect (process.env.URL_DATABASE, {})
        console.log('Conexión exitosa con la Base de Datos');
    }catch(error){
        console.error('Erro de Conexión: ' , error)
    }
}
