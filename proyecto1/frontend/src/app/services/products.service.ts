import { Injectable, inject } from '@angular/core';
// esto nos permite hacer peticiones al back o a un API 
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor() { }

  httpClient = inject(HttpClient);

  API_URL_GET= "http://localhost:3000/obtenerProductos";
  API_URL_POST= "http://localhost:3000/registrarProducto";
  API_URL_PUT= "http://localhost:3000/actualizarProducto";
  API_URL_DELETE= "http://localhost:3000/eliminarProducto";

  //Obtener datos
  getProducts(){
    // Hago la petición GET
    return this.httpClient.get(this.API_URL_GET);
  }

  //Crear datos
  // esta funcion me recibe parametros
  postProduct(nombre:string, imagen:string, precio:number, cantidad:number, colores:string){
    const infoProducto = {
      nombre:nombre,
      imagen:imagen,
      precio:precio,
      cantidad:cantidad,
      colores:colores
    }

    return this.httpClient.post(this.API_URL_POST, infoProducto)

  }

  //Modificar datos

  putProduct(nombre:string, imagen:string, precio:number, cantidad:number, colores:string, id:string){
    const infoProducto = {
      nombre:nombre,
      imagen:imagen,
      precio:precio,
      cantidad:cantidad,
      colores:colores
    }

    return this.httpClient.put(`${this.API_URL_PUT}/${id}`, infoProducto);
  }

  //Eliminar datos

  deleteProduct(id:string){
    return this.httpClient.delete(`${this.API_URL_DELETE}/${id}`);
  }

}
