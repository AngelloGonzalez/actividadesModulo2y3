// improtar mongoose -> schema -> plantilla de productos

import mongoose, { Schema } from "mongoose";

const schema = mongoose.schema;

// Estructurando como se van a guardar la informacion de los productos en nuestra db
const productschema = new schema ({
    nombre:{
        type: String,
        require:true
    },
    imagen:{
        type: String
    },
    precio:{
        type: Number,
        require:true
    },
    cantidad:{
        type: Number,
        require:true
    },
    color:{
        type: String,
        require:true
    }
});

// utilizamos esa platilla para crear nuestro modelo ->
// mongoose.model() -> se utiliza para crear nuestro modelo

// 1. nombre de la conexion que me va a guardar datos
// 2. necesitamos darle como parametro el schema que hicimos
export const productModel = mongoose.model('usuario', productschema);

