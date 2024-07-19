import { Component, inject, Input } from '@angular/core';
import { NavegacionComponent } from '../../comant/navegacion/navegacion.component';
import { FooterComponent } from '../../comant/footer/footer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
// import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ProductosComponent } from '../productos/productos.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NavegacionComponent, FooterComponent, RouterLink, FormsModule, ProductosComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  productoService = inject(ProductsService);
  allProducts: any[] = [];
  product = {
    nombre: '',
    imagen: '',
    precio: '',
    cantidad: '',
    descripcion: '',
    _id:''
  };

  // datos(arreglo: any[]) {
  //   console.log(arreglo);
  //   this.product.nombre = arreglo[0].nombre
  // }

  // aca obtenemos la información al hacer la petición get 
  // aca obtenemos nuestros productos

  obtenerProductos() {
    this.productoService.getProducts().subscribe((res: any) => {
      if (res) {
        console.log(res);
        this.allProducts = res;
        // this.datos(this.allProducts)
      } else {
        console.error('Hubo un error');
      }
    });
  }

  // metodo que permite que se rendericen los productos con el sitio web 
  ngOnInit() {
    this.obtenerProductos();
  }

  // Aqui tenemos la logica para eliminar producto

  productosDelete: any[] = [];

  deleteProduct(_id: string) {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "gray",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {

        this.productoService.deleteProduct(_id).subscribe((res: any) => { })

        Swal.fire({
          title: "Eliminar!",
          text: "Su archivo ha sido eliminado.",
          icon: "success"

        });
        this.obtenerProductos()
      }
    });
  };

  // Aqui tenemos la logica para actualizar el producto
  // actualizarProducto = inject(ProductsService); 
  // putProducto : any [] = [];

  // Aqui tenemos logica para agregar producto

  agregarProduct() {
    if (this.product.imagen == '' ||this.product.nombre == '' ||  this.product.descripcion == '' || this.product.precio == '' || this.product.cantidad == ''){
      alert('Ingrese todos los datos validos')
    }
   
    this.productoService.postProduct(this.product.imagen, this.product.nombre, this.product.descripcion, this.product.precio, this.product.cantidad).subscribe((res: any)=>{

      if(res){
        console.log(res);
      }
      this.obtenerProductos();
      // (this.product.imagen = '' ||this.product.nombre = '' ||  this.product.descripcion = '' || this.product.precio = '' || this.product.cantidad = '')
    });
    
  }

  actualizarProducto(_id: string){
    this.productoService.putProduct(this.product.imagen, this.product.nombre, this.product.descripcion, this.product.precio, this.product.cantidad, this.product._id).subscribe((res:any)=>{
      console.log(this.product.imagen, this.product.nombre, this.product.descripcion, this.product.precio, this.product.cantidad, this.product._id)
    });
    }

}









// importar el services
// hacer la injec


