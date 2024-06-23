// importaciones 
import express from 'express'
// importamos nuestros controladores
import { getProducts, postProducts, deleteproductsById, putProductsById } from "../controllers/products.controllers.js";

// configuramos el router de express
const productsRouter = express.Router();


// definimos nuestras rutas

// ruta para la peticion GET
// 1. Determino la ruta y luego le digo que es lo que tiene que hacer
productsRouter.get('/obtenerProductos',getProducts);

// Ruta para la peticion POST
productsRouter.post('/registrarProducto',postProducts);

// Ruta para la petición DELETE
productsRouter.delete('/eliminarProducto/:_id',deleteproductsById);

// ruta para la petición PUT

productsRouter.put('/actualizarProducto/:_id',putProductsById);

export default productsRouter;


