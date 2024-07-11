import { Component, inject } from '@angular/core';
import { NavegacionComponent } from '../../comant/navegacion/navegacion.component';
import { FooterComponent } from '../../comant/footer/footer.component';
import { RouterLink } from '@angular/router';
// para interactuar con los formularios
import { FormsModule } from '@angular/forms';
// para hacer la redireccion a otra pagina
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [FormsModule, NavegacionComponent, FooterComponent, RouterLink],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {

  // vamos a inyectar nuestra directiva del router
  router = inject(Router);

  // vamos a dar unos datos para validar administración
  administrador = {
    correo: "admin@gmail.com",
    contrasenia: "123"
  };

  correo: string = '';
  contrasenia: string = '';

  // viene la logica para redireccionar a la otra pagina 
  iniciarSesion() {
    if (this.correo === this.administrador.correo && this.contrasenia === this.administrador.contrasenia) {
      alert('¡Bienvenido Administrador!');
      this.router.navigate(['/admin']);
    } else {
      alert('Correo o Contraseña Incorrectos')
    }
  }

}
