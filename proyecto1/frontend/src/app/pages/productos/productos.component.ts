import { Component, inject, Input, input } from '@angular/core';
import { FooterComponent } from '../../comant/footer/footer.component';
import { NavegacionComponent } from '../../comant/navegacion/navegacion.component';
import { ProductsService } from '../../services/products.service';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FooterComponent, NavegacionComponent, AdminComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productoService = inject(ProductsService); 
  allProducts : any[] = [];
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

  deleteProducto(id: string){
    this.productoService.deleteProduct(id).subscribe(()=>{

    });
}

  

}
