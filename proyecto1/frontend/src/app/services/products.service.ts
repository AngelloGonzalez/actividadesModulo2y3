import { Injectable, inject } from '@angular/core';
// esto nos permite hacer peticiones al back o a un API 
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor() { }

  httpClient = inject(HttpClient);

  // API_URL_GET= "http://localhost:3000/obtenerProductos";
  // API_URL_POST= "http://localhost:3000/registrarProducto";
  // API_URL_PUT= "http://localhost:3000/actualizarProducto";
  // API_URL_DELETE= "http://localhost:3000/eliminarProducto";

  API_URL= "http://localhost:3000/";

  //Obtener datos
  getProducts(){
    // Hago la petición GET
    return this.httpClient.get(`${this.API_URL}obtenerProductos`);
  }

  //Crear datos
  // esta funcion me recibe parametros
  postProduct(imagen:string,nombre:string, descripcion:string, precio:string, cantidad:string ){
    const infoProducto = {
      imagen:imagen,
      nombre:nombre,
      descripcion:descripcion,
      precio:precio,
      cantidad:cantidad
    }

    return this.httpClient.post(`${this.API_URL}registrarProducto`,infoProducto);

  }

  //Modificar datos

  putProduct(imagen:string,nombre:string, descripcion:string, precio:string, cantidad:string, id:string){
    const infoProducto = {
      imagen:imagen,
      nombre:nombre,
      descripcion:descripcion,
      precio:precio,
      cantidad:cantidad
    }

    return this.httpClient.put(`${this.API_URL}actualizarProducto/${id}`, infoProducto);
  }

  //Eliminar datos

  deleteProduct(id:string){
    return this.httpClient.delete(`${this.API_URL}eliminarProducto/${id}`);
  }

}
