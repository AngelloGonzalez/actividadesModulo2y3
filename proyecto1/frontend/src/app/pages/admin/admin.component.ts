import { Component, DebugEventListener, inject, Input } from '@angular/core';
import { NavegacionComponent } from '../../comant/navegacion/navegacion.component';
import { FooterComponent } from '../../comant/footer/footer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ProductosComponent } from '../productos/productos.component';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NavegacionComponent, FooterComponent, RouterLink, FormsModule, ReactiveFormsModule, ProductosComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  productoService = inject(ProductsService); 
  allProducts : any [] = [];
  // aca obtenemos la información al hacer la petición get 
  // aca obtenemos nuestros productos

  obtenerProductos(){
    this.productoService.getProducts().subscribe((res:any)=>{
      if(res){
        console.log(res);
        this.allProducts = res;
      }else {
        console.error('Hubo un error');
      }
    });
  }

  // metodo que permite que se rendericen los productos con el sitio web 
  ngOnInit(){
    this.obtenerProductos();
    
  }

  // Aqui tenemos la logica para eliminar producto

  borrarP = inject(ProductsService); 
  productosDelete : any [] = [];

  deleteProduct(_id:string){
    this.borrarP.deleteProduct(_id).subscribe((res:any)=>{
    });
  };

  // Aqui tenemos la logica para actualizar el producto
  actualizarProducto = inject(ProductsService); 
  putProducto : any [] = [];
  

  // Aqui tenemos logica para agregar producto
  
  

}




  




// importar el services
// hacer la injec


