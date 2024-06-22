import { productModel } from "../models/productos.model"

// prueba inicial de mis controladores

// peticion GET -> me muestra los productos
export const getProducts = async (req, res) => {
    return res.send('Funciona la petición GET');
}

// peticion POST -> me crea los productos
export const postProducts = async(req, res) => {
    return res.send('Funciona la peticion POST');
}

// peticion POST -> me elimina producto por id
export const deleteproductsById = async(req, res) => {
    return res.send('Funciona la peticion DELETE');
}

// peticion POST -> me actualiza los productos por id
export const putProductsById = async(req, res) => {
    return res.send('Funciona la peticion PUT');
}

