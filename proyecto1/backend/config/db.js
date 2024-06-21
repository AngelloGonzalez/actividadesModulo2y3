// 1. importar las dependencias necesarias
import mongoose from "mongoose";

// coenxion base de datos de atlas
const conectionMongo = async ( ) => {
    await mongoose.connect(process.env.CONEXION_DB,{})
    // control de errores -> try - catch
    try{
        console.log('conexion exitosa con la base de datos');
    }catch(errores){
        console.error('Error de conexión: ' , error.message)
    }

}

export default conectionMongo;

