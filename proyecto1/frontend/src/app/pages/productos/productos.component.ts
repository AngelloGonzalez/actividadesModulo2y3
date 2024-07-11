import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../comant/footer/footer.component';
import { NavegacionComponent } from '../../comant/navegacion/navegacion.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FooterComponent, NavegacionComponent],
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

}
